import { useContext } from 'react';
import { TodoContext } from '../../Contexts/TodoContext';
import './TodoSearch.css';

function TodoSearch() {
  const {search, handleSearch} = useContext(TodoContext);
  return (
    <input
      className='TodoSearch'
      placeholder="Terminar curso"
      value={search}
      onChange={handleSearch}
    />
  )
}

export default TodoSearch