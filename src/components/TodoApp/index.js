import { useContext } from 'react';

import { TodoContext } from '../../Contexts/TodoContext';

import CreateTodoButton from '../CreateTodoButton';
import TodoCounter from '../TodoCounter';
import TodoItem from '../TodoItem';
import TodoList from '../TodoList';
import TodoSearch from '../TodoSearch';
import EmptyTodos from '../EmptyTodos';
import TodosErrors from '../TodosErrors';
import TodosLoading from '../TodosLoading';
import Modal from '../Modal';
import TodoForm from '../TodoForm';

function TodoApp() {
  const {
    cargando,
    error,
    filterTodos,
    handleCompleteTodo,
    handleDeleteTodo,
    openModal,
  } = useContext(TodoContext);

  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        { cargando && <TodosLoading /> }
        { error && <TodosErrors /> }
        { (!cargando && filterTodos.length === 0) && <EmptyTodos /> }
        {
          filterTodos.map( todo => (
            <TodoItem
              key={todo.title}
              todo={todo}
              handleCompleteTodo={handleCompleteTodo}
              handleDeleteTodo={handleDeleteTodo}
            />
          ))
        }
      </TodoList>
      <CreateTodoButton />

      {
        openModal && (
          <Modal>
            <TodoForm />
          </Modal>
        )
      }
    </>
  );
}

export default TodoApp;
