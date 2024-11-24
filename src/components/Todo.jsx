import { useTaskStore } from "../store/taskStore";
import TodoItems from "./TodoItems";
import AddTask from "./AddTask";

const Todo = () => {
  const { tasks } = useTaskStore();
  const totalToDos = tasks.length;
  const uncompletedToDos = tasks.filter((task) => !task.completed).length;
  const completedToDos = tasks.filter((task) => task.completed).length;

  return (
    <div className="bg-amber-50 place-self-center sm:w-11/12 max-w-xs sm:max-w-md flex flex-col p-4 min-h-[550px] rounded-xl mx-4 sm:mx-0">
      <div className="flex items-center my-7 gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59" />
        </svg>

        <h1 className="text-4xl">Let's do it!</h1>
      </div>

      <AddTask />

      <div className="flex-1 flex flex-col justify-center">
        {tasks.length === 0 ? (
          <p className="text-lg text-center text-gray-500 py-6">Add some tasks to get started!</p>
        ) : (
          tasks.map((task) => <TodoItems key={task.id} {...task} />)
        )}
      </div>

      <div className="mt-5 text-slate-700 space-y-3 ml-1 mb-6">
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
            You have <span className="font-bold text-purple-500">{totalToDos}</span> {totalToDos === 1 ? "to-do" : "to-dos"} in your list.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.95a1 1 0 00.95.69h4.211c.969 0 1.371 1.24.588 1.81l-3.417 2.482a1 1 0 00-.364 1.118l1.286 3.95c.3.921-.755 1.688-1.54 1.118L12 15.347l-3.417 2.482c-.784.57-1.838-.197-1.539-1.118l1.286-3.95a1 1 0 00-.364-1.118L4.55 9.377c-.783-.57-.38-1.81.588-1.81h4.21a1 1 0 00.951-.69l1.287-3.95z" />
          </svg>
          <p className="text-lg">
            You have <span className="font-bold text-green-500">{completedToDos}</span> {completedToDos === 1 ? "to-do" : "to-dos"} done.
            {completedToDos > 0 && (
              <span className="ml-2 text-green-500 font-bold">Yey!</span>
            )}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-6 w-6 ${uncompletedToDos < 2 ? "text-orange-500" : "text-red-500"}`}
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
            <span className={`font-bold ${uncompletedToDos < 2 ? "text-orange-500" : "text-red-500"}`}>
              {uncompletedToDos}
            </span> {uncompletedToDos === 1 ? "to-do" : "to-dos"} {uncompletedToDos === 1 ? "needs" : "need"} your attention!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Todo;
