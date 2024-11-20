import { Heading } from "./components/Heading";
import { TaskList } from "./components/TaskList";
import { TaskForm } from "./components/TasksForm";
import { UserInfo } from "./components/UserInfo"; 
import { UserSettings } from "./components/UserSettings";

export const App = () => {
  return (
    <> 
    <Heading/>
    <UserInfo/>
    <UserSettings/>
    <TaskForm/>
    <TaskList/>
    </>
  );
};
