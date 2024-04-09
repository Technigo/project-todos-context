import "../style/Heading.scss";
import { FaClipboardList } from "react-icons/fa";
import { useTask } from "../context/TaskContext";

export const Heading = () => {
  const { darkMode, changeMode } = useTask();

  const getBackgroundClases = () => {
    if (darkMode === false) {
      return "heading-background";
    } else {
      return "heading-background heading-background-dark";
    }
  };

  return (
    <>
      <div className={getBackgroundClases()}>
        <button onClick={changeMode}>Swich Mode</button>
        <FaClipboardList className="checklist" />
        <h1>Your ToDo List</h1>
        <FaClipboardList className="checklist" />
      </div>
    </>
  );
};
