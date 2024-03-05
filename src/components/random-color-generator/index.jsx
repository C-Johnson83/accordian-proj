import { useState } from 'react'
import './styles.css'


export default function Random() {
    const [colorCodeType, setColorCode] = useState('hex')
    const [color, setColor] = useState('')

    function randomizer(length) {
        return Math.floor(Math.random() * length)
    }

    function handleHexColor() {
        const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
        let hexColor = "#";

        for (let i = 0; i < 6; i++) {
            hexColor += hex[randomizer(hex.length)]
        }
        console.log(hexColor)
        setColor(hexColor)
    }
    function handleRgbColor() {

    }



    return (

        <div className="container" style={{ background: color }}>
            <h1>Color Randomizer</h1>
            <button className='colorButton' onClick={() => setColorCode('hex')}>Create Hex Color</button>
            <button className='colorButton'  onClick={() => setColorCode('rgb')}>Create RGB Color</button>
            <button  className='colorButton' onClick={colorCodeType === 'hex' ? handleHexColor : handleRgbColor}>Generate Random Color</button>
            <div className='colorType'>{colorCodeType} color
            </div>
            <div className='color'>{color}
            </div>
        </div>
    )
}