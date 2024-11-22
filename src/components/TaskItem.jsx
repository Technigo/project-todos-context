//Handles individual tasks//
import React from "react";
import { useTodoStore } from "../store/todoStore";
import { FaTrash } from "react-icons/fa"; // Import trashcan icon

export const TaskItem = ({ todo }) => {
    const { toggleTodo, removeTodo } = useTodoStore();

    return (
        <li className={`task-item ${todo.completed ? "completed" : ""}`}>
            <span
                role="button"
                onClick={() => toggleTodo(todo.id)}
                tabIndex="0"
            >
                {todo.text}
            </span>
            <button
                onClick={() => removeTodo(todo.id)}
                aria-label={`Remove ${todo.text}`}
                className="delete-button"
            >
                <FaTrash />
            </button>
        </li>
    );
};

