import { Home } from "./components/Home";
import { TaskList } from "./components/TaskList";
import { TaskForm } from "./components/TasksForm";
import { UserInfo } from "./components/UserInfo"; 
import { UserSettings } from "./components/UserSettings";

export const App = () => {
  return (
    <> 
    <Home />
    <UserInfo/>
    <UserSettings/>
    <TaskForm/>
    <TaskList/>
    </>
  );
};
