import { useState } from "react"
import style from './style.module.css'
const TodoInput = ({ addTodo }) => {
    const [text, setText] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (text.trim() !== '') {
            addTodo(text)
            setText('')
        }else{
            alert('Please enter a task first')
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={text} onChange={(myEvent) => {
                setText(myEvent.target.value)
            }} />
            <button className={style["sumbit"]}  type="submit">Add</button>
        </form>
    )
}

export default TodoInput