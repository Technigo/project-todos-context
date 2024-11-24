import React, { useState } from "react";
import { useTaskStore } from "./store";


function TaskForm() {
    const [taskText, setTaskText] = useState("");
    const addTask = useTaskStore((state) => state.addTask);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!taskText.trim()) return;

        const newTask = {
            id: Date.now(),
            text: taskText,
            completed: false,
            status: "Pending", // Estado inicial de la tarea
        };

        addTask(newTask);
        setTaskText(""); // Limpia el input
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
            <input
                type="text"
                value={taskText}
                onChange={(e) => setTaskText(e.target.value)}
                placeholder="Enter a task"
                style={{ marginRight: "10px" }}
            />
            <button type="submit">Add Task</button>
        </form>
    );
}

export default TaskForm;

