import { useState } from "react";
import { useToDoStore } from "../stores/useToDoStore";
import { BodyText } from "../ui/Typography";
import "./ToDoSubmit.css";
import { AddTodoButton } from "../ui/AddTodoButton";

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
    <form className="form-container" onSubmit={handleSubmit}>
      <BodyText>Enter a new task</BodyText>
      <div className="input-container">
        <textarea
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
          placeholder="Task description"
          className="textarea"
        />
        <AddTodoButton type="submit" />
      </div>
    </form>
  );
};