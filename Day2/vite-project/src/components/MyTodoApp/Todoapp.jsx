import { useState } from "react"
import TodoInput from "../MyTodoInput/todoinput"
import TodoItem from "../MyTodoItem/todoitem"
import { v4 as uuid } from 'uuid';
import style from './style.module.css';

const TodoApp = () => {
    const [todos, setTodos] = useState([])
    const addTodo = (text) => {
        setTodos([...todos, { text, completed: false }])
    }

    const completedTodo = (idx) => {
        const newTodos = [...todos]
        newTodos[idx].completed = !newTodos[idx].completed
        setTodos(newTodos)
    }

    const deleteTodo = (idx) => {
        const newTodos = [...todos]
        newTodos.splice(idx, 1)
        setTodos(newTodos)
    }

    return (
        <>
            <div className={style['body']}>
            <h1>Task Manager</h1>
                <TodoInput addTodo={addTodo} />
                <ul>
                    {todos.map((todo, idx) => {
                        console.log(uuid());
                        return <TodoItem
                            key={uuid()}
                            todo={todo}
                            index={idx}
                            deleteTodo={deleteTodo}
                            completedTodo={completedTodo} />
                    })}
                </ul>
            </div>
        </>
    )
}


export default TodoApp