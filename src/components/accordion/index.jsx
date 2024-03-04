import data from "./data"

export default function Accordion() {

    console.log(data)
    return (
        <div className="wrapper">
            <div className="accordian">
                {data && data.length > 0 ?
                    data.map((dataItem) => (
                        <div className="item">
                            <h3>{dataItem.question}</h3>
                            <div className="content">{dataItem.answer}</div>
                        </div>))
                    : <div>No data found</div>
                }
            </div>
        </div>
    )
}
