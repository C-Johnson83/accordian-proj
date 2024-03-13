import Accordion from "./components/accordion"
import Random from "./components/random-color-generator"
import StarRating from "./components/star-rating"
import SandArt from "./components/sand-art"
function App() {
  return (
    <>
    <h1>React Projects</h1>
    <p>Accordian</p>
      <Accordion />
      <p>Random Color Generator</p>
      <Random />
      <p>Star Rating</p>
      <StarRating numOfStars={50}/>
      <p>Sand Art</p>
      <SandArt />
    </>
  )
}

export default App
