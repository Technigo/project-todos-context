import { useTaskStore } from "../store/taskStore";

const TodoItems = ({ id, text, completed }) => {
  const toggleTask = useTaskStore((state) => state.toggleTask);
  const removeTask = useTaskStore((state) => state.removeTask);

  return (
    <div className="flex items-center my-3 gap-4">
      {/* Checkbox */}
      <input
        type="checkbox"
        checked={completed}
        onChange={() => toggleTask(id)}
        className={`h-6 w-6 rounded border-2 ${completed ? 'bg-green-500 border-green-500' : 'bg-white border-gray-300'} appearance-none relative focus:ring-0 focus:outline-none
    peer`} // 'peer' gör att vi kan använda andra stilar beroende på checkboxens tillstånd
      />


      {/* Text */}
      <p
        className={`flex-1 text-lg ${completed ? "text-slate-400 line-through" : "text-slate-700"}`}
      >
        {text}
      </p>

      {/* Delete button */}
      <button
        onClick={() => removeTask(id)}
        className="text-red-500 hover:text-red-700"
      >
        ✖
      </button>
    </div>
  );
};



export default TodoItems;
