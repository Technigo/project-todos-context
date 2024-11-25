import { Task } from "./Task";

export const TaskCategory = ({ category, tasks, text }) => {
  const categoryColors = {
    personal: "bg-personal text-personal-text",
    work: "bg-work text-work-text",
    home: "bg-home text-home-text",
    school: "bg-school text-school-text",
    social: "bg-social text-social-text",
    creative: "bg-creative text-creative-text",
    other: "bg-other text-other-text",
  };

  return (
    <div
      className={`p-4 rounded-lg shadow-md ${
        categoryColors[category.toLowerCase()] || "bg-other text-other-text"
      }`}
    >
      <h2 className="text-lg font-semibold border-b pb-2 mb-4">
        {text.categories[category.toLowerCase()] || category}
      </h2>
      <ul className="flex flex-col gap-2">
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
};
