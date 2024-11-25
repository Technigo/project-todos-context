import { useTaskStore } from "../stores/useTaskStore";
import { useLanguageStore } from "../stores/useLanguageStore";
import { translations } from "../data/translations";

export const TaskCounter = () => {
  // Access tasks from the store
  const tasks = useTaskStore((state) => state.tasks);

  // Access the current language from the Language store
  const currentLanguage = useLanguageStore((state) => state.currentLanguage);

  // Select translations based on current language
  const text = translations[currentLanguage].taskCounter;

  // Count completed and total tasks
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;

  return (
    <article className="bg-accent-gradient text-white p-5 rounded-lg shadow-md ring-4 ring-pink-500 ring-opacity-50 mx-auto max-w-full sm:max-w-md md:max-w-lg">
      <h3 className="text-2xl font-bold">{text.progressTitle}</h3>
      <p className="mt-2 text-lg">
        {totalTasks > 0
          ? `${completedTasks} of ${totalTasks} ${
              totalTasks === 1 ? text.task : text.tasks
            } ${text.completedText}`
          : text.noTasks}
      </p>
    </article>
  );
};
