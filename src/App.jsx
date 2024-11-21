import "./App.css";
import { Header } from "./components/Header";
import { TaskForm } from "./components/TaskForm";
import { TaskList } from "./components/TaskList";
import { useThemeStore } from "./stores/useThemeStore";

export const App = () => {
  const theme = useThemeStore((state) => state.theme);

  return (
    <div
      className={`min-h-screen flex flex-col xl:flex-row ${
        theme === "light"
          ? "bg-bgLight text-primary"
          : "bg-bgDark text-secondary"
      }`}
    >
      <Header />
      <main className="flex-grow relative p-5">
        <TaskForm />
        <TaskList />
      </main>
    </div>
  );
};
