import { useState } from "react";
import useTodoStore from "../store/useTodoStore";

const AddTodo = () => {
  const [title, setTitle] = useState("");
  const addTask = useTodoStore((state) => state.addTask);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTask(title.trim());
      setTitle("");
    }
  };

  return (
    <form onSubmit={handleSubmit} aria-label="Add Todo">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new task"
        aria-label="Task title"
        required
      />
      <button type="submit" className="add-btn">
        Add
      </button>
    </form>
  );
};

export default AddTodo;
