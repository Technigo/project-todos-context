import React from "react";
import { Animation } from "../components/Animation.jsx";
import "../components/Header.css";

export const Header = () => {
  return (
    <div>
      <header className="header">
        <h1 className="title">To-Do List</h1>
      <h2 className="sub-title">Work smarter, Not harder</h2>
      <div className="animation-container">
          <Animation />  {/* Insert the animation component here */}
        </div>
    </header>
    </div>
  );
};
