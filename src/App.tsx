import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import TaskCounter from "./components/TaskCounter";
import CompleteAllButton from "./components/CompleteAllButton";
import ThemeToggle from "./components/ThemeToggle";
import useThemeStore from "./store/useThemeStore";
import { useEffect } from "react";
import Footer from "./components/Footer";

const App: React.FC = () => {
  const theme = useThemeStore((state) => state.theme);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className={`container ${theme}`}>
      <h1>Xings Todo App</h1>
      <ThemeToggle />
      <AddTodo />
      <TaskCounter />
      <CompleteAllButton />
      <TodoList />
      <Footer />
    </div>
  );
};

export default App;
