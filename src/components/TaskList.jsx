import { useTaskStore } from "../stores/useTaskStore";
import { useThemeStore } from "../stores/useThemeStore";
import SleepingSloth from "../assets/sleeping-sloth.jpg";
import { Task } from "./Task";

export const TaskList = () => {
  // Access tasks
  const tasks = useTaskStore((state) => state.tasks);
  // Access toggleTask
  const toggleTask = useTaskStore((state) => state.toggleTask);
  // Access deleteTask
  const deleteTask = useTaskStore((state) => state.deleteTask);
  // Access theme
  const theme = useThemeStore((state) => state.theme);

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

  // Define category colors
  const categoryColors = {
    Personal: "bg-personal text-personal-text",
    Work: "bg-work text-work-text",
    Home: "bg-home text-home-text",
    School: "bg-school text-school-text",
    Social: "bg-social text-social-text",
    Creative: "bg-creative text-creative-text",
    Other: "bg-other text-other-text",
  };

  // Render sloth image if there are no tasks
  if (tasks.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center">
        <img
          src={SleepingSloth}
          alt="A drawing of a sleeping sloth"
          className="w-64 h-64 rounded-md object-contain opacity-70 pt-10"
        />
        <p
          className={` mt-4 text-lg 
        ${theme === "light" ? "text-primary" : "text-secondary"}`}
        >
          Nothing to do? Time to take a nap!
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {/* Loop through the categories */}
      {Object.keys(tasksByCategory).map((category) => (
        <div
          key={category}
          className={
            // "bg-secondary text-primary p-4 rounded-lg shadow-md w-full sm:flex-basis-[48%] md:flex-basis-[30%] flex-shrink"
            `p-4 rounded-lg shadow-md ${
              categoryColors[category] || "bg-other text-other-text"
            }`
          }
        >
          {/* Category Header */}
          <h2 className="text-lg font-semibold border-b pb-2 mb-4">
            {category}
          </h2>
          <ul className="flex flex-col gap-2">
            {/* Use Task component to render individual tasks */}
            {tasksByCategory[category].map((task) => (
              <Task
                key={task.id}
                task={task}
                toggleTask={toggleTask}
                deleteTask={deleteTask}
              />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
