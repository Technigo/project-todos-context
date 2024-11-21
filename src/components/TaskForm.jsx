import { useState } from "react";
import { useTaskStore } from "../stores/useTaskStore";
import { useThemeStore } from "../stores/useThemeStore";

export const TaskForm = () => {
  // State to toggle form visibility
  const [isFormVisible, setIsFormVisible] = useState(false);
  // State for task title
  const [title, setTitle] = useState("");
  // State for task category
  const [category, setCategory] = useState("To Do");

  // Access the 'addTask' action
  const addTask = useTaskStore((state) => state.addTask);
  // Access the current theme
  const theme = useThemeStore((state) => state.theme);

  const handleSubmit = (event) => {
    // Prevent page reload on form submission
    event.preventDefault();

    if (title.trim() === "") {
      alert(
        "A task without a name is like a dream without a plan. Let's give it a title!"
      );
      return;
    }

    // Add a new task to the store
    addTask({
      id: Date.now(),
      title,
      category,
      completed: false,
    });

    // Reset the input fields
    setTitle(""), setCategory("To Do");
    setIsFormVisible(false); // Hide the form after submitting
  };

  return (
    <div>
      {/* Button to toggle the form visibiilty*/}
      <button
        onClick={() => setIsFormVisible(!isFormVisible)} // Toggle form visibility
        className="w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center shadow-md hover:bg-accent/80 fixed bottom-4 left-1/2 transform -translate-x-1/2 xl:hidden"
        aria-label={isFormVisible ? "Close form" : "Open form"}
      >
        {/* Change icon based on visibility */}
        {isFormVisible ? "X" : "+"}
      </button>

      {/* Task form (always visible on lg and larger) */}
      <form
        onSubmit={handleSubmit}
        className={`"bg-secondary mt-4 p-5 flex flex-col gap-4 ${
          isFormVisible ? "block" : "hidden"
        } xl:flex xl:flex-row xl:justify-center xl:gap-2 xl:h-full border border-primary rounded-lg shadow-lg 
        ${
          theme === "light"
            ? "bg-secondary text-primary"
            : "bg-primary text-secondary border-secondary"
        }
        "`}
      >
        {/* Input field for task */}
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="What's next on your to-do list?"
          className="border border-primary text-primary p-2 rounded-md shadow-sm focus:ring-2 focus:ring-accent outline-none flex-grow"
        />

        {/* Dropdown menu for task category */}
        <select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          className="border border-primary text-primary p-2 rounded-md shadow-sm focus:ring-2 focus:ring-accent outline-none"
        >
          <option value="General">To Do</option>
          <option value="Personal">Personal Tasks</option>
          <option value="Work">Work/Professional</option>
          <option value="Home">Home & Family</option>
          <option value="School">School/Education</option>
          <option value="Social">Social & Relationships</option>
          <option value="Creative">Creative Projects</option>
          <option value="Other">Other</option>
        </select>

        {/* Submit button */}
        <button
          type="submit"
          className="bg-accent text-secondary px-4 py-2 rounded-md shadow hover:bg-primary/90"
        >
          Add Task
        </button>
      </form>
    </div>
  );
};
