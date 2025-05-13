import { useState } from "react"
import style from './style.module.css'
const TodoInput = ({ addTodo }) => {
    const [text, setText] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        addTodo(text)
        setText('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={text} onChange={(myEvent) => {
                console.log(myEvent.target.value)
                setText(myEvent.target.value)
            }} />
            <button className={style["sumbit"]}  type="submit">Add</button>
        </form>
    )
}

export default TodoInput