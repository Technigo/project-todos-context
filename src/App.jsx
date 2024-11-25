import "./App.css";
import { Header } from "./components/Header";
import { TaskCounter } from "./components/TaskCounter";
import { TaskForm } from "./components/TaskForm";
import { TaskList } from "./components/TaskList";
import { useThemeStore } from "./stores/useThemeStore";

export const App = () => {
  const theme = useThemeStore((state) => state.theme);

  return (
    <div
      className={`min-h-screen flex flex-col xl:flex-row ${
        theme === "light"
          ? "bg-secondary text-primary"
          : "bg-bgDark text-secondary"
      }`}
    >
      <Header />
      <main className="flex flex-col flex-grow relative p-8 lg:p-12 pb-20 gap-6 xl:gap-12">
        <TaskCounter />
        <TaskForm />
        <TaskList />
      </main>
    </div>
  );
};
