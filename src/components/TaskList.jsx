import { useTask } from "../context/TaskContext";
import { useState, useEffect } from "react";
import TaskItem from "./TaskItem";
import TaskCount from "./TaskCount";
import Confetti from "react-confetti";
import AllRemovedImage from "../assets/Celebrate.png";
import "../styling/TaskList.css";

const TaskList = () => {
  const { tasks, removeTask, toggleTask } = useTask();
  const [showConfetti, setShowConfetti] = useState(false);
  const [allTasksCompleted, setAllTasksCompleted] = useState(false);

  useEffect(() => {
    const anyIncompleteTasks = tasks.some((task) => !task.completed);
    setAllTasksCompleted(!anyIncompleteTasks && tasks.length > 0);
    if (allTasksCompleted) {
      setShowConfetti(true);
      setTimeout(() => {
        setShowConfetti(false);
      }, 5000);
    }
  }, [tasks, allTasksCompleted]);

  const handleRemoveTask = (id) => {
    removeTask(id);
  };

  const handleToggleTask = (id) => {
    toggleTask(id);
  };

  return (
    <div className="listContainer">
      <div className="listWrapper">
        <h2 className="listTitle">Tasks</h2>
        <div className="taskCount">
          <TaskCount />
        </div>
      </div>
      {tasks.length > 0 ? (
        <ul className="taskList">
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onToggle={() => handleToggleTask(task.id)}
              onRemove={() => handleRemoveTask(task.id)}
            />
          ))}
        </ul>
      ) : (
        <div className="emptyTaskContainer">
          <img
            src={AllRemovedImage}
            alt="Dancing little man"
            className="allRemovedImg"
          />
          <p className="allRemovedText">No tasks remaining</p>
        </div>
      )}
      {showConfetti && (
        <div className={`confettiContainer ${showConfetti ? "show" : ""}`}>
          {showConfetti && <Confetti />}
        </div>
      )}
    </div>
  );
};

export default TaskList;
