import { useContext } from 'react';
import { TodoContext } from '../../Contexts/TodoContext';
import './TodoCounter.css';

function TodoCounter() {
  const {totalTodos: total, completedTodos: completed} = useContext(TodoContext);
  let h1Validator = 'noHayTodos';
  if (total === completed && total > 0 ) h1Validator = 'completados';
  if (total !== completed && total > 0 ) h1Validator = 'hayTodos';
  const h1Render = {
    hayTodos: <h1 className='TodoCounter'>
      Has completado <span>{completed}</span> de <span>{total}</span> TODOs
    </h1>,
    completados: <h1 className='TodoCounter'>Felicidades has completado todas las tareas de la lista!</h1>,
    noHayTodos: <h1 className='TodoCounter'>No tienes TODOs registrados</h1>,
  }
  return (
    <>
      { h1Render[h1Validator] }
    </>
  )
}

export default TodoCounter