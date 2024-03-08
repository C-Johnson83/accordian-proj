import Accordion from "./components/accordion"
import Random from "./components/random-color-generator"
import StarRating from "./components/star-rating"
function App() {
  return (
    <>
      {/* <Accordion /> */}
      <Random />
      <StarRating numOfStars={50}/>
    </>
  )
}

export default App
