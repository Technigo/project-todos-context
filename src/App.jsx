import { TaskList } from "./components/TaskList";
import { TaskInput } from "./components/TaskInput";
import { FilterButtons } from "./components/FilterButtons";
import { useTaskStore } from "./stores/TaskStore";

export const App = () => {
  const { tasks } = useTaskStore();
  return (
    <div>
      <h1>Task List</h1>
      <p>{tasks.length} tasks</p>
      <FilterButtons />
      <TaskInput />
      <TaskList />
    </div>
  );
};
