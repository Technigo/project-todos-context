import "./Header.css";
import { useAppData } from "../contexts/AppContext";
import { useTask } from "../contexts/TaskContext"
import BabyChick from "../assets/baby-chick.svg";
import BlackChick from "../assets/baby-chick-black.svg";


export const Header = () => {
  const { theme, setTheme, appContent } = useAppData();
  const { taskData, addTask } = useTask();

  const completedTasks = taskData.filter((task) => task.complete);

  const toggleTheme = () => {
    console.log("Clicked birdy");
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <header className={theme}>
      <div className="title">
        <h1>{appContent.heading}</h1>
        <button id="toggle-button" onClick={toggleTheme}>
          <img
            src={
              theme === "light"
                ? BabyChick
                : BlackChick
            }
          />
        </button>
      </div>
      <p>
        Eggs cracked:{" "}
        {taskData ? `${completedTasks.length} / ${taskData.length} ` : "0"}
      </p>
    </header>
  );
};
