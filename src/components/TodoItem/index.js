import { ReactComponent as CheckSvg } from '../../Images/check.svg';
import { ReactComponent as DeleteSvg } from '../../Images/delete.svg';
import './TodoItem.css';

function TodoItem({ todo, handleCompleteTodo, handleDeleteTodo }) {

  return (
    <li className="TodoItem">
        <span
          className={`Icon-container-check`}
          onClick={() => handleCompleteTodo(todo)}
        >
          <CheckSvg className='Icon-svg' fill={ todo.completed ? 'green' : 'gray'}/>
        </span>
        <p className={`TodoItem-p ${todo.completed && 'TodoItem-p--completed'}`}>{todo.title}</p>
        <span
          className={`Icon-container-delete`}
          onClick={() => handleDeleteTodo(todo)}
        >
          <DeleteSvg className='Icon-svg' fill='gray' />
        </span>
    </li>
  )
}

export default TodoItem