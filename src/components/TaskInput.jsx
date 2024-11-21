//Allows adding new tasks.//

import React, { useState } from "react";
import { useTodoStore } from "../store/todoStore";

export const TaskInput = () => {
    const [inputValue, setInputValue] = useState("");
    const addTodo = useTodoStore((state) => state.addTodo);

    const handleAdd = () => {
        if (inputValue.trim()) {
            addTodo(inputValue.trim());
            setInputValue("");
        }
    };

    return (
        <div className="task-input">
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Add a new task"
                aria-label="Task input"
            />
            <button onClick={handleAdd} aria-label="Add task">
                Add
            </button>
        </div>
    );
};





