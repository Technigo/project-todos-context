import { useTaskStore } from "../stores/useTaskStore";
import { Task } from "./Task";

export const TaskList = () => {
  // Access tasks
  const tasks = useTaskStore((state) => state.tasks);
  // Access toggleTask
  const toggleTask = useTaskStore((state) => state.toggleTask);

  // Group tasks by category
  const tasksByCategory = tasks.reduce(
    (acc, task) => {
      // reduce() method takes an array and transforms it into an object
      // Check if the current task's category exists as a key in the accumulator (the object that stores categories as keys).
      // If not, create a new key with an empty array as its value.
      if (!acc[task.category]) {
        acc[task.category] = [];
      }

      // Push the current task into the array for its category
      acc[task.category].push(task);

      // Return the updated accumulator for the next iteration
      return acc;
    },
    // Initial value for the accumulator (an empty object to store categories)
    {}
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {/* Loop through the categories */}
      {Object.keys(tasksByCategory).map((category) => (
        <div
          key={category}
          className="bg-secondary text-primary p-4 rounded-lg shadow-md w-full sm:flex-basis-[48%] md:flex-basis-[30%] flex-shrink"
        >
          {/* Category Header */}
          <h2 className="text-lg font-semibold border-b pb-2 mb-4">
            {category}
          </h2>
          <ul className="flex flex-col gap-2">
            {/* Use Task component to render individual tasks */}
            {tasksByCategory[category].map((task) => (
              <Task key={task.id} task={task} toggleTask={toggleTask} />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
