import { useTaskStore } from "../store/taskStore";

const TodoItems = ({ id, text, completed }) => {
  const toggleTask = useTaskStore((state) => state.toggleTask);
  const removeTask = useTaskStore((state) => state.removeTask);

  return (
    <div className="flex items-center my-4 gap-6  bg-blue-100 rounded-full px-4 min-h-20">
      {/* Checkbox */}
      <input
        type="checkbox"
        checked={completed}
        onChange={() => toggleTask(id)}
        className={`h-6 w-6 rounded border-2 appearance-none relative focus:ring-0 focus:outline-none 
    peer
    ${completed ? 'bg-green-500 border-green-500' : 'bg-white border-slate-800'}
    hover:border-green-00`}
      />



      {/* Text */}
      <p
        className={`flex-1 m- text-lg ${completed ? "text-slate-400 line-through" : "text-slate-800"}`}
      >
        {text}
      </p>

      {/* Delete button */}
      <button
        onClick={() => removeTask(id)}
        className="text-red-500 hover:text-red-700"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
        </svg>
      </button>
    </div>
  );
};



export default TodoItems;
