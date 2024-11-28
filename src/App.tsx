import { Header } from "./components/Header"
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";

export const App: React.FC = () => {
  return (
    <div>
      <Header />
      <TodoForm />
      <TodoList />
    </div>
  );
};
