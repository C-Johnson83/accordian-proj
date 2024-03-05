import {useState} from 'react'
import './styles.css'


export default function Random() {
const {colorType, setColorType}= useState('hex')
const [color, setColor] = useState('')

return (

<div className="container">
    <button>Generate Random Color</button>
    <button>Create Hex Color</button>
    <button>Create RGB Color</button>
</div>
)
}