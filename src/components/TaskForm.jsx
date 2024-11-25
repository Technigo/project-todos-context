import { useState } from "react";
import DatePicker from "react-datepicker";
import { useTaskStore } from "../stores/useTaskStore";
import { useThemeStore } from "../stores/useThemeStore";
import { useLanguageStore } from "../stores/useLanguageStore";
import { translations } from "../data/translations";
import { FaPlus, FaTimes, FaCalendarAlt } from "react-icons/fa";

export const TaskForm = () => {
  // State to toggle form visibility
  const [isFormVisible, setIsFormVisible] = useState(false);
  // State for task title
  const [title, setTitle] = useState("");
  // State for task category
  const [category, setCategory] = useState("");
  // State for due date
  const [dueDate, setDueDate] = useState(null);

  // Access the 'addTask' action
  const addTask = useTaskStore((state) => state.addTask);
  // Access the current theme
  const theme = useThemeStore((state) => state.theme);
  // Access current language
  const currentLanguage = useLanguageStore((state) => state.currentLanguage);
  const text = translations[currentLanguage];

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
      dueDate,
      completed: false,
    });

    // Reset the input fields
    setTitle("");
    setCategory("");
    setDueDate(null);
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
          className={`bg-secondary p-5 flex flex-col gap-4 w-full xl:flex-wrap flex-grow ${
            isFormVisible ? "block" : "hidden"
          } lg:flex lg:flex-row xl:justify-center xl:gap-2 xl:h-full border border-primary rounded-lg shadow-lg max-w-md lg:max-w-full ${
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
            placeholder={text.inputPlaceholder}
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
                {text.categoryPlaceholder}
              </option>
              {Object.keys(translations.en.categories).map((key) => (
                <option key={key} value={key}>
                  {text.categories[key]}
                </option>
              ))}
            </select>
          </div>
          {/* Due Date Picker */}
          <div className="relative">
            <DatePicker
              selected={dueDate}
              onChange={(date) => setDueDate(date)}
              placeholderText={text.setDueDate}
              className="border border-primary text-center text-primary p-2 rounded-md shadow-sm  w-full focus:ring2 focus:ring-accent outline-none w-full"
            />
            <FaCalendarAlt className="absolute top-3 left-3 text-primary pointer-events-none" />
          </div>
          {/* Submit button */}
          <button
            type="submit"
            className="bg-accent text-primary font-bold px-4 py-2 rounded-md shadow shadow-md ring-2 ring-pink-500 ring-opacity-50 hover:bg-pink-500 focus:ring-2 focus:ring-primary focus:outline-none h-10"
          >
            {text.addTask}
          </button>
        </form>
      </div>
    </div>
  );
};
