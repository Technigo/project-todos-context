import { FaCheck, FaTrash } from "react-icons/fa";
import { format } from "date-fns";

// Task Component: Renders a single task item with a checkbox and title
export const Task = ({ task, toggleTask, deleteTask }) => {
  return (
    <li className="flex flex-col items-start sm:items-center justify-between p-2 border rounded-md gap-2">
      {/* Label wraps the checkbox and title for accessibility */}
      <label className="flex justify-start gap-2 cursor-pointer flex-1 w-full">
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
        <div className="w-5 h-5 bg-gray-200 border-2 border-gray-300 rounded peer-checked:bg-pink-500 peer-checked:border-pink-500 relative">
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

      <div className="flex w-full justify-between">
        {/* Task Timestamp */}
        <span className="text-sm text-gray-400">
          {format(new Date(task.createdAt), "MMM dd, yyyy, h:mm a")}
        </span>
        {/* Delete button */}
        <button
          // Call deleteTask with task ID
          onClick={() => deleteTask(task.id)}
          aria-label={`Delete task: ${task.title}`}
          className="text-accent hover:scale-110 hover:brightness-125 focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          <FaTrash />
        </button>
      </div>
    </li>
  );
};
