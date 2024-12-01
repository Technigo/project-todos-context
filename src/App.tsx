// App.tsx

import { Footer } from "./sections/Footer.jsx";
import { Header } from "./sections/Header.jsx";
import { NewTask } from "./sections/NewTask.jsx";
import { TaskCounter } from "./sections/TaskCounter.jsx";
import { Tasks } from "./sections/Tasks.jsx";
import "./App.css";

export const App: React.FC = () => {
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
