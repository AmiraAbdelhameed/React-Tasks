import PropTypes from 'prop-types'
import style from './style.module.css'
const TodoItem = ({ todo, index, deleteTodo, completedTodo }) => {
    return (
        <>
            <li>
                <span  style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}  >{todo.text}</span>
                <div >
                <button className={style["done"]} onClick={() => completedTodo(index)}>Done</button>
                    <button className={style["delete"]} onClick={() => deleteTodo(index)}>Delete</button>
                </div>
            </li>
        </>
    )
}


TodoItem.propTypes = {
    todo: PropTypes.shape({
        text: PropTypes.string,
        completed: PropTypes.bool
    }).isRequired,
    index: PropTypes.number.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    completedTodo: PropTypes.func.isRequired
}





export default TodoItem ;