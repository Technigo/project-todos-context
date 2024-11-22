import { useTaskStore } from "../stores/useTaskStore";

export const TaskCounter = () => {
  // Access tasks from the store
  const tasks = useTaskStore((state) => state.tasks);

  // Count completed and total tasks
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;

  return (
    <article className="bg-accent-gradient text-white p-4 mb-5 rounded-lg shadow-md ring-4 ring-pink-500 ring-opacity-50 mx-auto max-w-full sm:max-w-md md:max-w-lg">
      <h3 className="text-xl font-bold">Today's Progress Summary</h3>
      <p className="mt-2 text-lg">
        {totalTasks > 0
          ? `${completedTasks} of ${totalTasks} task${
              totalTasks !== 1 ? "s" : ""
            } completed`
          : "No tasks added yet! Start planning your day."}
      </p>
    </article>
  );
};
