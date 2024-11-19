import { createContext, useContext } from "react";
import { useTask } from "./TaskContext";

const ButtonContext = createContext();

export const ButtonProvider = ({ children }) => {
  const { completeAllTasks, removeAllTasks } = useTask();

  const onCompleteAll = () => {
    completeAllTasks();
  };

  const onRemoveAll = () => {
    removeAllTasks();
  };

  return (
    <ButtonContext.Provider value={{ onCompleteAll, onRemoveAll }}>
      {children}
    </ButtonContext.Provider>
  );
};

export const useButton = () => {
  const context = useContext(ButtonContext);
  if (!context) {
    throw new Error("useButton must be used within a ButtonProvider");
  }
  return context;
};
