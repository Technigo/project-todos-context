import React from "react";
import { ToDoProvider } from "./contexts/ToDoContext";
import { ToDoForm } from "./components/ToDoForm";
import { ToDoList } from "./components/ToDoList";
import { TodaysDate } from "./components/TodaysDate";
import { Header } from "./components/Header";
import backGround from "./assets/background-blobs.svg";
import "./App.css";

const App = () => {
  return (
    <>
      <img src={backGround} className="background" alt="Background" />
      <section className="wrapper">
      <Header />
      <ToDoProvider>
        <div className="sub-wrapper">
          <TodaysDate />
          <ToDoForm />
          <ToDoList />
        </div>
      </ToDoProvider>
      </section>
    </>
  );
};

export default App;
