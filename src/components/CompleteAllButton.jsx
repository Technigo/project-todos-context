import { FaCheckDouble } from "react-icons/fa";

export const CompleteAllButton = ({ completeAllTasks, text }) => (
  <div className="flex justify-center items-center">
    <button
      onClick={completeAllTasks}
      className="flex items-center gap-2 bg-accent text-primary px-4 py-2 rounded-md shadow-md ring-2 ring-pink-500 ring-opacity-50 hover:bg-pink-500 hover:text-secondary focus:ring-2 focus:ring-primary"
    >
      <FaCheckDouble />
      {text}
    </button>
  </div>
);
