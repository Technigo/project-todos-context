import React from "react";
import { useToDos } from "../contexts/ToDoContext";
import "./Header.css";

export const Header = () => {
  //access doneTodos and totalToDos from context
  const { doneToDos, totalToDos } = useToDos();

  return (
    <section className="header-wrapper">
      <h1 className="header-title">Sunset Sync</h1>
      <h2 className="header-subtitle">Slay your day before sunset</h2>
      <p className="counter">
        Slayed: {doneToDos} | {totalToDos}
      </p>
    </section>
  );
};
