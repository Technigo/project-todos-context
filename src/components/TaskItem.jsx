// This component shows every task and handles its actions (marking as complete/incomplete and deleting).
import React from "react";
import { useTodoStore } from "../store/todoStore";
import { FaTrash } from "react-icons/fa"; // Imported the trashcan icon to use as the delete button.

export const TaskItem = ({ todo }) => {
    // to mark tasks (complete/incomplete) and removeTodo (to delete tasks)
    const { toggleTodo, removeTodo } = useTodoStore();

    return (
        <li className={`task-item ${todo.completed ? "completed" : ""}`}>
            {/* The task text. Clicking it will toggle the task between complete and incomplete. */}
            <span
                role="button"
                onClick={() => toggleTodo(todo.id)} // Calls the toggle function with the task's ID.
                tabIndex="0"
            >
                {todo.text} {/* Displays the text of the task */}
            </span>


            <button
                onClick={() => removeTodo(todo.id)} // Calls the remove function with the task's ID.
                aria-label={`Remove ${todo.text}`}
                className="delete-button"
            >
                <FaTrash />
            </button>
        </li>
    );
};
