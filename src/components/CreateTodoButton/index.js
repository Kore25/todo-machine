import { useContext } from 'react';
import './CreateTodoButton.css';
import { TodoContext } from '../../Contexts/TodoContext';

function CreateTodoButton() {
  const { setOpenModal } = useContext(TodoContext);
  return (
    <button
      className="CreateTodoButton"
      onClick={ () => setOpenModal( state => !state ) }
    >
      +
    </button>
  )
}

export default CreateTodoButton