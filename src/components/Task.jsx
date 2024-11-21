import { FaCheck } from "react-icons/fa";

// Task Component: Renders a single task item with a checkbox and title
export const Task = ({ task, toggleTask }) => {
  return (
    <li className="flex items-center justify-between p-2 border rounded-md">
      {/* Label wraps the checkbox and title for accessibility */}
      <label className="flex items-center gap-2 cursor-pointer">
        {/* Task Checkbox */}
        <input
          type="checkbox"
          // Dynamically set checkbox state based on task.completed
          checked={task.completed}
          // Calls toggleTask function when checkbox is toggled
          onChange={() => toggleTask(task.id)}
          className="hidden peer"
        />
        {/* Custom Checkbox */}{" "}
        <div className="w-5 h-5 bg-gray-200 border-2 border-gray-300 rounded peer-checked:bg-pink-500 peer-checked:border-pink-500 relative flex items-center justify-center">
          {task.completed && <FaCheck className="text-white" />}
        </div>
        {/* Task Title */}
        <span
          // Add line-through and gray color if task is completed. otherwise no additional styles for incomplete task
          className={`${task.completed ? "line-through text-gray-500" : ""}`}
        >
          {task.title}
        </span>
      </label>
    </li>
  );
};
