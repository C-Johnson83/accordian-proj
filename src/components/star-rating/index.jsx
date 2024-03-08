import { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import './styles.css'

export default function StarRating({ numOfStars}) {

    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)

    function handleClick(getCurrentIndex) {
        setRating(getCurrentIndex)
    };

    function handleMouseMove(getCurrentIndex) {
        setHover(getCurrentIndex)
    };
    function handleMouseLeave(){
        setRating(rating)
    };


    return (

        <div className='star-rating'>

            {

                [...Array(numOfStars)].map((_, index) => {
                    index += 1

                    return (
                        <FaStar
                            key={index}
                            className={index <= (hover || rating) ? "active"
: "inactive"}                            onClick={() => handleClick(index)}
                            onMouseMove={() => handleMouseMove(index)}
                            onMouseLeave={() => handleMouseLeave(index)}
                            size={40}
                        />);
                })

            }

        </div>
    )
}