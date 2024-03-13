import React, { useEffect, useRef } from 'react';
import p5 from 'p5';

export default function SandArt() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const sketch = (p) => {
      let canvas;
      let grid;
      let velocityGrid;

      const w = 5; // Size of each square
      let cols, rows;
      let hueValue = 0;
      const gravity = 0.1;

      p.setup = () => {
        canvas = p.createCanvas(800, 600);
        p.colorMode(p.HSB, 360, 255, 255);
        cols = p.width / w;
        rows = p.height / w;
        grid = make2DArray(cols, rows);
        velocityGrid = make2DArray(cols, rows, 1);
      };

      p.draw = () => {
        p.background(0);
        if (p.mouseIsPressed) {
          let mouseCol = Math.floor(p.mouseX / w);
          let mouseRow = Math.floor(p.mouseY / w);

          // Randomly add an area of sand particles
          let matrix = 5;
          let extent = Math.floor(matrix / 2);
          for (let i = -extent; i <= extent; i++) {
            for (let j = -extent; j <= extent; j++) {
              if (p.random(1) < 0.75) {
                let col = mouseCol + i;
                let row = mouseRow + j;
                if (withinCols(col) && withinRows(row)) {
                  grid[col][row] = hueValue;
                  velocityGrid[col][row] = 1;
                }
              }
            }
          }
          // Change the color of the sand over time
          hueValue += 0.5;
          if (hueValue > 360) {
            hueValue = 0; // Reset hueValue when it reaches 360
          }
        }

        // Draw the sand
        for (let i = 0; i < cols; i++) {
          for (let j = 0; j < rows; j++) {
            p.noStroke();
            if (grid[i][j] > 0) {
              p.fill(grid[i][j], 255, 255);
              let x = i * w;
              let y = j * w;
              p.square(x, y, w);
            }
          }
        }

        // Create a 2D array for the next frame of animation
        let nextGrid = make2DArray(cols, rows);
        let nextVelocityGrid = make2DArray(cols, rows);

        // Check every cell
        for (let i = 0; i < cols; i++) {
          for (let j = 0; j < rows; j++) {
            // What is the state?
            let state = grid[i][j];
            let velocity = velocityGrid[i][j];
            let moved = false;
            if (state > 0) {
              let newPos = Math.floor(j + velocity);
              for (let y = newPos; y > j; y--) {
                let below = grid[i][y];
                let dir = 1;
                if (p.random(1) < 0.5) {
                  dir *= -1;
                }
                let belowA = -1;
                let belowB = -1;
                if (withinCols(i + dir)) belowA = grid[i + dir][y];
                if (withinCols(i - dir)) belowB = grid[i - dir][y];

                if (below === 0) {
                  nextGrid[i][y] = state;
                  nextVelocityGrid[i][y] = velocity + gravity;
                  moved = true;
                  break;
                } else if (belowA === 0) {
                  nextGrid[i + dir][y] = state;
                  nextVelocityGrid[i + dir][y] = velocity + gravity;
                  moved = true;
                  break;
                } else if (belowB === 0) {
                  nextGrid[i - dir][y] = state;
                  nextVelocityGrid[i - dir][y] = velocity + gravity;
                  moved = true;
                  break;
                }
              }
            }

            if (state > 0 && !moved) {
              nextGrid[i][j] = grid[i][j];
              nextVelocityGrid[i][j] = velocityGrid[i][j] + gravity;
            }
          }
        }
        grid = nextGrid;
        velocityGrid = nextVelocityGrid;
      };

      function make2DArray(cols, rows) {
        const arr = new Array(cols);
        for (let i = 0; i < arr.length; i++) {
          arr[i] = new Array(rows).fill(0);
        }
        return arr;
      }

      function withinCols(i) {
        return i >= 0 && i <= cols - 1;
      }

      function withinRows(j) {
        return j >= 0 && j <= rows - 1;
      }
    };

    canvasRef.current = new p5(sketch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div ref={canvasRef} />;
}
