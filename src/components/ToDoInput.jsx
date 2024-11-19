import { useState } from "react";

export const ToDoInput = ({ onAdd }) => {
    const [inputText, setInputText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputText.trim()) {
            onAdd(inputText);
            setInputText("");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="New task"
            />
            <button type="submit">Add Todo</button>
        </form>
    );
};