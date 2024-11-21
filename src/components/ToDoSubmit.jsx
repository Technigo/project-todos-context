import { useState } from "react";
import { useToDoStore } from "../stores/useToDoStore";
import { BodyText } from "../ui/Typography";
import "./ToDoSubmit.css";

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
      <div className="form-container">
        <BodyText>Enter a new task</BodyText>
        <div className="input-container">
          <textarea
            value={todoText}
            onChange={(e) => setTodoText(e.target.value)}
            placeholder="Task description"
            className="textarea"
          />
          <button type="submit">
            <BodyText>Add Todo</BodyText>
          </button>
        </div>
      </div>
    </form>
  );
};