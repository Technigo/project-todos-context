// NewTask.tsx

import { NewTaskInput } from "../components/NewTaskInput.jsx";
import "./NewTask.css";

export const NewTask: React.FC = () => {
  return (
    <div className="new-task-container">
      <h2>New task</h2>
      <NewTaskInput />
    </div>
  );
};