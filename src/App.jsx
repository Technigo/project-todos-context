// App.jsx

import { Footer } from "./sections/Footer";
import { Header } from "./sections/Header";
import { NewTask } from "./sections/NewTask";
import { TaskCounter } from "./sections/TaskCounter";
import { Tasks } from "./sections/Tasks";
import "./App.css";

export const App = () => {
  return (
    <main>
      <Header />
      <div className="task-background">
        <TaskCounter />
        <div className="border">
          <NewTask />
          <Tasks />
        </div>
      </div>
      <Footer />
    </main>
  );
};
