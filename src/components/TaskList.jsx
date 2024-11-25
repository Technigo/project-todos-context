import { useState } from "react";
import { useTaskStore } from "../stores/useTaskStore";
import { useThemeStore } from "../stores/useThemeStore";
import { useLanguageStore } from "../stores/useLanguageStore";
import { translations } from "../data/translations";
import { NoTasksMessage } from "./NoTasksMessage";
import { CompleteAllButton } from "./CompleteAllButton";
import { TaskCategory } from "./TaskCategory";

export const TaskList = () => {
  // Access tasks
  const tasks = useTaskStore((state) => state.tasks);
  // Access toggleTask
  const toggleTask = useTaskStore((state) => state.toggleTask);
  // Access deleteTask
  const deleteTask = useTaskStore((state) => state.deleteTask);
  const completeAllTasks = useTaskStore((state) => state.completeAllTasks);
  // Access theme
  const theme = useThemeStore((state) => state.theme);
  // Access current language
  const currentLanguage = useLanguageStore((state) => state.currentLanguage);
  // Select translations
  const text = translations[currentLanguage];

  // State to track whether dates are shown
  const [showDates, setShowDates] = useState(true);

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

  // Check if all tasks are completed
  const allTasksCompleted =
    tasks.length > 0 && tasks.every((task) => task.completed);

  return (
    <section className="flex flex-col gap-5 h-full pb-10">
      {/* Button to mark all tasks complete (only show if there are tasks) */}
      {!allTasksCompleted && tasks.length > 0 && (
        <CompleteAllButton
          completeAllTasks={completeAllTasks}
          text={text.completed}
        />
      )}

      {/* Display Sleeping Sloth when all tasks are complete */}
      {allTasksCompleted ? (
        <NoTasksMessage />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Loop through the categories */}
          {Object.keys(tasksByCategory).map((category) => (
            <TaskCategory
              key={category}
              category={category}
              tasks={tasksByCategory[category]}
              text={text}
            />
          ))}
        </div>
      )}
    </section>
  );
};
