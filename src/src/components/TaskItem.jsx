import React from "react";
import { useTaskStore } from "./store";


function TaskItem({ task }) {
    const toggleTask = useTaskStore((state) => state.toggleTask);
    const removeTask = useTaskStore((state) => state.removeTask);

    return (
        <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
                style={{ marginRight: "10px" }}
            />
            <p
                style={{
                    textDecoration: task.completed ? "line-through" : "none",
                    margin: "0 10px",
                }}
            >
                {task.text}
            </p>
            <span style={{ marginRight: "10px", color: task.completed ? "green" : "red" }}>
                {task.status || "Pending"} {/* Muestra el estado actual */}
            </span>
            <button onClick={() => removeTask(task.id)} style={{ marginLeft: "auto" }}>
                Delete
            </button>
        </div>
    );
}

export default TaskItem;

