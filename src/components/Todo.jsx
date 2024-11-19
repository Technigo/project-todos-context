import { useTaskStore } from "../store/taskStore";
import TodoItems from "./TodoItems";
import AddTask from "./AddTask"; // Assuming you have a component for adding new tasks
import { PlusCircleIcon } from '@heroicons/react/24/solid'; // Example of a Tailwind icon from Heroicons

const Todo = () => {
  const { tasks } = useTaskStore(); // Access the tasks from the Zustand store

  const totalToDos = tasks.length;
  const uncompletedToDos = tasks.filter((task) => !task.completed).length;
  const completedToDos = tasks.filter((task) => task.completed).length; // Calculate completed to-dos

  return (
    <div className="bg-gray-100 place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl">
      <div className="flex items-center mt-7 gap-2">
        {/* Using Heroicons with Tailwind */}
        <PlusCircleIcon className="w-8 h-8 text-purple-500" />
        <h1 className="text-3xl">To-Do List</h1>
      </div>

      <AddTask /> {/* Assuming AddTask component for adding new tasks */}

      {/* Render tasks */}
      <div>
        {tasks.map((task) => (
          <TodoItems key={task.id} {...task} />
        ))}
      </div>

      <div className="mt-5 text-slate-700 space-y-3">
        {/* Total to-dos */}
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-purple-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
          <p className="text-lg">
            You {totalToDos === 1 ? "has" : "have"} <span className="font-bold text-purple-500">{totalToDos}</span> {totalToDos === 1 ? "to-do" : "to-dos"} in your list.
          </p>
        </div>

        {/* Completed to-dos */}
        <div className="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.95a1 1 0 00.95.69h4.211c.969 0 1.371 1.24.588 1.81l-3.417 2.482a1 1 0 00-.364 1.118l1.286 3.95c.3.921-.755 1.688-1.54 1.118L12 15.347l-3.417 2.482c-.784.57-1.838-.197-1.539-1.118l1.286-3.95a1 1 0 00-.364-1.118L4.55 9.377c-.783-.57-.38-1.81.588-1.81h4.21a1 1 0 00.951-.69l1.287-3.95z" />
          </svg>
          <p className="text-lg">
            Great job! <span className="font-bold text-green-500">{completedToDos}</span> {completedToDos === 1 ? "to-do" : "to-dos"} {completedToDos === 1 ? "is" : "are"} done.
          </p>
        </div>

        {/* Uncompleted to-dos */}
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-red-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v2m0 4h.01m-6.93 4h13.86a2 2 0 001.732-2.732l-6.93-12a2 2 0 00-3.464 0l-6.93 12A2 2 0 005.07 19z"
            />
          </svg>
          <p className="text-lg">
            <span className="font-bold text-red-500">{uncompletedToDos}</span> {uncompletedToDos === 1 ? "to-do" : "to-dos"} {uncompletedToDos === 1 ? "needs" : "need"} your attention!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Todo;
