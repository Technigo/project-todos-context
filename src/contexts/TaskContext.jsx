import { useContext, createContext, useState } from "react";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [taskData, setTaskData] = useState([]);

  // Check if there is data in taskData, add new data at the end of taskData-array
  const addTask = (newTask) => {
    if (taskData.length === 0 || taskData === undefined) {
      setTaskData(() => [newTask]);
    } else {
      setTaskData((prevTasks) => [...prevTasks, newTask]);
    }
  };

  // Check the index with the taskId, check if state is complete, set state to opposite of current state.
  const completeTask = (taskId) => {
    const indexCheck = (task) => task.id === taskId;
    const indexToComplete = taskData.findIndex(indexCheck);
    const updateTasks = [...taskData];
    const currentState = updateTasks[indexToComplete].complete;
    updateTasks[indexToComplete].complete = !currentState;

    setTaskData(updateTasks);
  };

  // Check the index with the taskId, remove the index.
  const removeTask = (taskId) => {
    const indexCheck = (task) => task.id === taskId;
    const indexToRemove = taskData.findIndex(indexCheck);
    const updateTasks = [...taskData];
    updateTasks.splice([indexToRemove], 1);

    setTaskData(updateTasks);
  };

  // Reset taskData to be an empty array.
  const clearTasks = () => {
    setTaskData([]);
  };

  return (
    <TaskContext.Provider
      value={{ taskData, addTask, completeTask, removeTask, clearTasks }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTask = () => useContext(TaskContext);
