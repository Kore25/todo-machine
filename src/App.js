import { TodoProvider } from "./Contexts/TodoContext";
import TodoApp from "./components/TodoApp";

function App() {
  return (
    <TodoProvider>
      <TodoApp />
    </TodoProvider>
  );
}

export default App;
