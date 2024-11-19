import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import Header from "./components/Header";
import TodayDate from "./components/TodayDate";
import ButtonActions from "./components/ButtonActions";
import { TaskProvider } from "./context/TaskContext";
import { ButtonProvider } from "./context/ButtonContext";

export const App = () => {
  return (
    <TaskProvider>
      <ButtonProvider>
        <div>
          <Header />
          <TodayDate />
          <TaskForm />
          <TaskList />
          <ButtonActions />
        </div>
      </ButtonProvider>
    </TaskProvider>
  );
};

export default App;
