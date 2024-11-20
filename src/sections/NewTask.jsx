// NewTask.jsx

import { NewTaskInput } from "../components/NewTaskInput";
import "./NewTask.css";

export const NewTask = () => {
  return (
    <div className="new-task-container">
      <h2>New task</h2>
      <NewTaskInput />
    </div>
  );
};