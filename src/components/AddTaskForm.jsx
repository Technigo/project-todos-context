import { useState } from "react";
import { useTaskStore } from "../stores/taskStore";
import "./AddTaskForm.css";


export const AddTaskForm = () => {
    const [title, setTitle] = useState("");
    const addTask = useTaskStore((state) => state.addTask);


    const handleSubmit = (e) => {
        e.preventDefault();
        if (title.trim()) {
            addTask(title);
            setTitle("");

        }
    };

    return (

        <form className="add-task-form" onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="What Needs to Be Done?"
                className="task-input"

            />
            <button className="add-task-button" type="submit">+</button>
        </form>
    );
};

