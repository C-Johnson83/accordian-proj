import data from "./data"
import { useState } from 'react'
import "./styles.css"

export default function Accordion() {

    const [selected, setSelected] = useState(null)
    const [multiSelect, setMultiSelect] = useState([])
    const [enableMulti, setEnableMulti] = useState(false)

    function clickHandle(currentId) {
        setSelected(currentId === selected ? null : currentId)
    }
    function multiClickHandle(currentId) {
        let multiArray = [...multiSelect]
        const findIndex = multiArray.indexOf(currentId)
        console.log(findIndex)
        if (findIndex === -1) multiArray.push(currentId)
        else multiArray.splice(findIndex, 1)
        setMultiSelect(multiArray)
        console.log(multiArray)
    }

    const myStyle = {
       true: { backgroundColor: 'green', color: 'white'},
   false: { backgroundColor: '#f0f0f0'}
    }
    return (
        <div className="wrapper">
            <button className="enableButton" style={myStyle[enableMulti]} onClick={() => setEnableMulti(!enableMulti)}>enable multi-selection</button>
            <div className="accordion">
                {data && data.length > 0 ?
                    data.map((dataItem) => (
                        <div className="item">
                            <div onClick={
                                enableMulti
                                    ? () => multiClickHandle(dataItem.id)
                                    : () => clickHandle(dataItem.id)
                            }
                                className="title"
                            >
                                <h3>{dataItem.question}</h3>
                                <span className="button">+</span>
                                {
                                    selected === dataItem.id || multiSelect.indexOf(dataItem.id) !== -1 ?
                                        <div className="content">{dataItem.answer}</div>
                                        : null

                                }
                            </div>
                        </div>))
                    : <div>No data found</div>
                }
            </div>
        </div>
    )
}
