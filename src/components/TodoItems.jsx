import { useTaskStore } from "../store/taskStore";

const TodoItems = ({ id, text, completed }) => {
  const toggleTask = useTaskStore((state) => state.toggleTask);
  const removeTask = useTaskStore((state) => state.removeTask);

  return (
    <div className="flex items-center my-4 gap-4 bg-blue-100 rounded-full px-4 min-h-24 w-full font-caveat">
      <input
        type="checkbox"
        id={`task-${id}`}
        checked={completed}
        onChange={() => toggleTask(id)}
        className={`h-6 w-6 rounded border-2 appearance-none relative focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 focus:outline-none peer ${completed ? 'bg-green-500 border-green-500' : 'bg-white border-slate-800'} hover:border-green-500`}
        aria-labelledby={`task-label-${id}`}
      />
      <label id={`task-label-${id}`} htmlFor={`task-${id}`} className="sr-only">
        {completed ? "Mark as incomplete" : "Mark as complete"}
      </label>

      <p className={`flex-1 text-lg ${completed ? "text-slate-400 line-through" : "text-slate-800"} break-words overflow-hidden`}>
        {text}
      </p>

      <button
        onClick={() => removeTask(id)}
        className="hover:scale-125 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 rounded-full p-2 w-10 h-10 flex items-center justify-center"
        aria-label={`Delete task: ${text}`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
        </svg>
      </button>
    </div>
  );
};

export default TodoItems;
