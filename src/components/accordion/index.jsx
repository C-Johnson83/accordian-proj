import data from "./data"
import { useState } from 'react'
export default function Accordion() {

    const [selected, setSelected] = useState(null)

    function clickHandle(currentId) {
        setSelected(currentId)


    }

    return <div className="wrapper">
        <div className="accordian">
            {data && data.length > 0 ?
                data.map((dataItem) => (
                    <div className="item">
                        <div onClick={() => clickHandle(dataItem.id)} className="title">
                            <h3>{dataItem.question}</h3>
                            <span>+</span>
                            {
                                selected === dataItem.id ?
                                    <div className="content">{dataItem.answer}</div>
                                    : null

                            }
                        </div>
                    </div>))
                : <div>No data found</div>
            }
        </div>
    </div>
}
