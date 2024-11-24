// App.jsx

import React, { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { useTaskStore } from "./components/store";
import rewardsData from "./components/rewards.json"; // Importar el JSON
import "./App.css";



function App() {
  const tasks = useTaskStore((state) => state.tasks);
  const darkMode = useTaskStore((state) => state.darkMode);
  const toggleDarkMode = useTaskStore((state) => state.toggleDarkMode);
  const totalRewards = tasks.filter((task) => task.completed).length;

  // Estado para almacenar las recompensas
  const [rewards, setRewards] = useState([]);

  // Cargar las recompensas desde rewards.json
  useEffect(() => {
    setRewards(rewardsData); // Carga inicial
  }, []);

  // Buscar la recompensa basada en el total de puntos
  const currentReward = rewards.find((reward) => reward.points === totalRewards);


  return (
    <div
      className={`container ${darkMode ? "dark-mode" : ""}`}
      style={{
        background: darkMode
          ? `
            linear-gradient(
              rgba(0, 0, 0, 0.6), 
              rgba(0, 0, 0, 0.6)
            ),
            url('/Background.jpg')`
          : `url('/Background.jpg')`, // Imagen normal en light mode
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        padding: "20px",
        color: darkMode ? "#fff" : "#000", // Cambiar color del texto
      }}
    >
      <button
        onClick={toggleDarkMode}
        aria-label={`Toggle ${darkMode ? "light" : "dark"} mode`}
        style={{
          backgroundColor: darkMode ? "#4caf50" : "#ddd",
          color: darkMode ? "#fff" : "#000",
          border: "none",
          padding: "10px 20px",
          borderRadius: "5px",
          cursor: "pointer",
          marginBottom: "20px",
        }}
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      <h1 className="title">Tasks for Teenagers</h1>
      <TaskForm />
      <TaskList tasks={tasks} />
      <div className="reward-box">
        Total Rewards *under approval: {totalRewards}
      </div>

      {/* Mostrar la recompensa actual o un mensaje si no hay */}
      <div className="rewards-equivalence">
        <h2>Rewards Equivalence</h2>
        {currentReward ? (
          <p className="reward-message">
            Your reward for {currentReward.points} {currentReward.points === 1 ? "point" : "points"}:{" "}
            <strong>{currentReward.reward}</strong>
          </p>
        ) : (
          <p className="reward-message">
            You have no rewards until the tasks are correctly done.
          </p>
        )}
      </div>
    </div>
  );
}

export default App;


