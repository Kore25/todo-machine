import { useContext, useState } from 'react';
import { TodoContext } from '../../Contexts/TodoContext';
import './TodoForm.css';
//9e2c
const TodoForm = () => {
  const { setOpenModal, handleAgregarTodo } = useContext(TodoContext);
  const [newTodoValue, setNewTodoValue] = useState('');
  const onSubmit = (event) => {
    event.preventDefault();
    handleAgregarTodo(newTodoValue);
    setOpenModal(false);
  }
  const onCancel = () => {
    setOpenModal(false);
  }
  const onChange = ({ target }) => {
    setNewTodoValue(target.value);
  }
  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nuevo TODO</label>
      <textarea
        value={newTodoValue}
        placeholder="Escribe aqui"
        onChange={onChange}
      />
      <div className='TodoForm-buttonContainer'>
        <button
          type='button'
          className='TodoForm-button Todoform-button--cancel'
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button
          type='submit'
          className='TodoForm-button Todoform-button--add'
        >
          Agregar
        </button>
      </div>
    </form>
  )
}

export default TodoForm;