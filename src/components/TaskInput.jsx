// This component handles the input and allows adding new tasks.
import React, { useState } from "react";
import { useTodoStore } from "../store/todoStore";

export const TaskInput = () => {
    const [inputValue, setInputValue] = useState("");

    // Zustand's store function to add a new task.
    const addTodo = useTodoStore((state) => state.addTodo);

    // This is the function to adding a task when the "Add" button is clicked.
    const handleAdd = () => {
        if (inputValue.trim()) {
            addTodo(inputValue.trim());
            setInputValue("");
        }
    };

    return (
        <div className="task-input">
            {/* Input field to type a new task. */}
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Add a new task"
                aria-label="Task input" // Accessibility for screen readers.
            />

            <button onClick={handleAdd} aria-label="Add task">
                Add
            </button>
        </div>
    );
};





