import { Header } from "./components/Header";
import { TaskList } from "./components/TaskList";
import { TaskInput } from "./components/TaskInput";
import { AppDataProvider } from "./contexts/AppContext";
import { TaskProvider } from "./contexts/TaskContext";

export const App = () => {
  return (
    <AppDataProvider>
      <TaskProvider>
        <div>
          <Header />
          <div className="input">
            <TaskInput />
          </div>
          <div className="task-list">
            <TaskList />
          </div>
        </div>
      </TaskProvider>
    </AppDataProvider>
  );
};
