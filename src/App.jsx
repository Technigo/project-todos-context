import { NewTodoForm } from "./components/NewTodoForm";
import { TodoProvider } from "./context/TodoContext";
import { TodoList } from "./components/TodoList";

export const App = () => {
  return (
    <TodoProvider>
      <NewTodoForm />
      <TodoList />
    </TodoProvider>
  );
};
