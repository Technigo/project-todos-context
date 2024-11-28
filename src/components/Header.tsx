import { Animation } from "./Animation";
import "../components/Header.css";

export const Header: React.FC = () => {
  return (
    <div>
      <header className="header">
        <h1 className="title">To-Do List</h1>
      <h2 className="sub-title">Work smarter, Not harder</h2>
      <div className="animation-container">
          <Animation />
        </div>
    </header>
    </div>
  );
};
