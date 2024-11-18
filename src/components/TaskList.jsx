import "./TaskList.css";
import { useTask } from "../contexts/TaskContext";
import { ListRender } from "./ListRender";
import { ClearButton } from "./ClearButton";

export const TaskList = () => {
  const { taskData } = useTask();

  // Filter out two lists, either with the complete state true or false.
  const incompleteTasks = taskData.filter((task) => task.complete === false);
  const completedTasks = taskData.filter((task) => task.complete === true);

  return (
    <>
      <div className="task-area">
        {incompleteTasks.length != 0 ? (
          <div className="todo-list">
            <h2>Active Tasks</h2>
            <ListRender array={incompleteTasks} />
          </div>
        ) : (
          <div className="todo-list todo-clear">
            <h2>All clear! </h2> <p>No tasks left... eggcellent! </p>
          </div>
        )}

        {completedTasks.length != 0 ? (
          <div className="todo-list">
            <h2>Completed Tasks</h2>
            <ListRender array={completedTasks} />
          </div>
        ) : null}
      </div>
      <div>
        {incompleteTasks.length != 0 || completedTasks.length != 0 ? (
          <>
            <ClearButton />
          </>
        ) : null}
      </div>
    </>
  );
};


