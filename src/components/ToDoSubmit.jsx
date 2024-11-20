import { useState } from "react";
import { useToDoStore } from "../stores/useToDoStore";

export const ToDoSubmit = () => {
    const { addTodo } = useToDoStore()
    const [todoText, setTodoText] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        if (todoText.trim()) {
            addTodo(todoText);
            setTodoText("");
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <p>Enter a new task</p>
            <input
                type="text"
                value={todoText}
                onChange={(e) => setTodoText(e.target.value)}
                placeholder="Task description"
            />
            <button type="submit">Add Todo</button>
        </form>
    );
};