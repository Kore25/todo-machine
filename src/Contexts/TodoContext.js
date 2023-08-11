import { createContext, useState } from "react";
import { useLocalStorage } from '../hooks/useLocalStorage';

// const defaultTodos = [
//   { title: 'esto es prueba', completed: false },
//   { title: 'eterminar tarea', completed: true },
//   { title: 'estudiar ingles', completed: false },
//   { title: 'tomar agua', completed: true },
// ]

// localStorage.setItem('todos_v1', JSON.stringify(defaultTodos));

const TodoContext = createContext();
const TodoProvider = ({ children }) => {
    const {item: todos, saveItem, cargando, error} = useLocalStorage('todos_v1', []);
    const [search, setSearch] = useState("");
    const [openModal, setOpenModal] = useState(false);

    const handleSearch = ({ target }) => {
      setSearch(target.value);
    }

    const handleCompleteTodo = (todo) => {
      const newTodos = todos.map( t => {
        if( t.title === todo.title){
          t.completed = !todo.completed;
        }
        return t;
      });
      saveItem(newTodos);
    }

    const handleDeleteTodo = (todo) => {
      const newTodos = todos.filter( t => t.title !== todo.title);
      saveItem(newTodos);
    }

    const handleAgregarTodo = (todo) => {
      const newTodo = { title: todo, completed: false };
      saveItem([...todos, newTodo]);
    }

    const completedTodos = todos.filter( t => t.completed ).length;
    const totalTodos = todos.length;

    const filterTodos = todos.filter( t => t.title.toLowerCase().includes(search.toLowerCase()) );
    return (
        <TodoContext.Provider value={{
            todos,
            saveItem,
            cargando,
            error,
            search,
            handleSearch,
            handleCompleteTodo,
            handleDeleteTodo,
            completedTodos,
            totalTodos,
            filterTodos,
            openModal,
            setOpenModal,
            handleAgregarTodo,
        }}>
            {children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider };