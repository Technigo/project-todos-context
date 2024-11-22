import { useState } from "react";
import { useTaskStore } from "../stores/useTaskStore";
import { useThemeStore } from "../stores/useThemeStore";
import { FaPlus, FaTimes } from "react-icons/fa";

export const TaskForm = () => {
  // State to toggle form visibility
  const [isFormVisible, setIsFormVisible] = useState(false);
  // State for task title
  const [title, setTitle] = useState("");
  // State for task category
  const [category, setCategory] = useState("");

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
    setTitle(""), setCategory("");
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
        {isFormVisible ? <FaTimes size={24} /> : <FaPlus size={24} />}
      </button>
      {/* Task form (always visible on lg and larger) */}{" "}
      <div className="flex flex-col items-center">
        <form
          onSubmit={handleSubmit}
          className={`bg-secondary p-5 flex flex-col gap-4 w-full md:max-w-lg lg:max-w-xl ${
            isFormVisible ? "block" : "hidden"
          } xl:flex xl:flex-row xl:justify-center xl:gap-2 xl:h-full border border-primary rounded-lg shadow-lg ${
            theme === "light"
              ? "bg-secondary text-primary"
              : "bg-primary text-secondary border-secondary"
          }`}
        >
          {/* Input field for task with label for screen reader */}
          <label htmlFor="task-title" className="sr-only">
            Task Title
          </label>
          <input
            id="task-title"
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="Name a task..."
            className="border border-primary text-primary p-2 rounded-md shadow-sm focus:ring-2 focus:ring-accent outline-none flex-grow h-10"
          />

          {/* Dropdown menu for task category */}
          <div>
            {/* Hidden Label for Accessibility */}
            <label htmlFor="task-category" className="sr-only">
              Task Category
            </label>

            {/* Select Dropdown */}
            <select
              id="task-category"
              value={category}
              onChange={(event) => setCategory(event.target.value)}
              className="border border-primary text-primary p-2 rounded-md shadow-sm focus:ring-2 focus:ring-accent outline-none w-full h-10"
            >
              <option value="" disabled>
                Choose a category
              </option>
              <option value="Personal">Personal Tasks</option>
              <option value="Work">Work/Professional</option>
              <option value="Home">Home & Family</option>
              <option value="School">School/Education</option>
              <option value="Social">Social & Relationships</option>
              <option value="Creative">Creative Projects</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="bg-accent text-white px-4 py-2 rounded-md shadow hover:bg-accent/80 focus:ring-2 focus:ring-primary focus:outline-none h-10"
          >
            Add Task
          </button>
        </form>
      </div>
    </div>
  );
};
