import AddTaskForm from "./components/AddTaskForm";
import TaskList from "./components/TaskList";
import TaskCount from "./components/TaskCount";

export const App = () => {
  return (
    <div>
      <header>
        <h1>To-Do App</h1>
        <TaskCount />
      </header>
      <main>
        <AddTaskForm />
        <TaskList />
      </main>
    </div>
  );
};

