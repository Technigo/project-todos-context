import { useAppData } from "../../contexts/FormContext";
import { AddTask } from "../addTask/AddTask";
import { TodoList } from "../todoList/TodoList";
import { Time } from "./Time";
import moment from "moment";
import "./mainPage.css";

export const MainPage = () => {
  const { appContent } = useAppData();

  const date = moment().format("MMM Do YY");
  const weekday = moment().format("dddd");

  return (
    <>
      <header>{appContent.title}</header>
      <main>
        <div className="date-mode">
          <Time weekday={weekday} date={date} />
        </div>
        <div className="container">
          <TodoList />
          <AddTask />
        </div>
      </main>
    </>
  );
};