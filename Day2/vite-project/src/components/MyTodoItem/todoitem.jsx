import PropTypes from 'prop-types'

const TodoItem = ({ todo, index, deleteTodo, completedTodo }) => {
    return (
        <>
            <li>
                <span  style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}  >{todo.text}</span>
                <div >
                <button onClick={() => completedTodo(index)}>Done</button>
                <button onClick={() => deleteTodo(index)}>Delete</button>
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