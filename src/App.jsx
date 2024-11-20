// App.jsx

import { Footer } from "./sections/Footer";
import { Header } from "./sections/Header";
import { NewTask } from "./sections/NewTask";
import { TaskCounter } from "./sections/TaskCounter";
import { Tasks } from "./sections/Tasks";

export const App = () => {
  return (
    <>
      <Header />
      <TaskCounter />
      <NewTask />
      <Tasks />
      <Footer />
    </>
  );
};
