import { Header } from "./components/Header"
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";

export const App = () => {
  return (
    <div>
    <Header />
    <TodoForm />
    <TodoList />
    </div>
  );
};
