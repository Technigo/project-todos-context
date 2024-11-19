import AddTaskForm from "./components/AddTaskForm";
import TaskList from "./components/TaskList";

export const App = () => {
  return (
    <div className="grid m-auto max-w-96 p-8 gap-10">
      <AddTaskForm />
      <TaskList />
    </div>
  );
};
