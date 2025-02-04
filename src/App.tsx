import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import TaskCounter from "./components/TaskCounter";
import CompleteAllButton from "./components/CompleteAllButton";
import ThemeToggle from "./components/ThemeToggle";
import useThemeStore from "./store/useThemeStore";
import { useEffect } from "react";

const App: React.FC = () => {
  const theme = useThemeStore((state) => state.theme);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className={`container ${theme}`}>
      <h1>Todo App</h1>
      <ThemeToggle />
      <AddTodo />
      <TaskCounter />
      <CompleteAllButton />
      <TodoList />
    </div>
  );
};

export default App;
