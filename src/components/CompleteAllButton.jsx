import { FaCheckDouble } from "react-icons/fa";

export const CompleteAllButton = ({ completeAllTasks, text }) => (
  <div className="flex justify-center items-center">
    <button
      onClick={completeAllTasks}
      className="flex items-center gap-2 bg-accent text-white px-4 py-2 rounded-md shadow hover:bg-accent/90"
    >
      <FaCheckDouble />
      {text}
    </button>
  </div>
);
