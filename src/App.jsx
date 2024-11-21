import "./App.css";
import { Header } from "./components/Header";
import { TaskForm } from "./components/TaskForm";

export const App = () => {
  return (
    <div className="flex flex-col xl:flex-row h-screen">
      <Header />
      <main className="flex-grow p-5">
        <TaskForm />
      </main>
    </div>
  );
};
