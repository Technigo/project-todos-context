import { useState } from "react";
import { useToDoStore } from "../stores/useToDoStore";
import { useProjectStore } from "../stores/useProjectStore";
import { BodyText } from "../ui/Typography";
import "./ToDoSubmit.css";
import { AddTodoButton } from "../ui/AddTodoButton";

export const ToDoSubmit = () => {
  const { addTodo } = useToDoStore();
  const { addProject } = useProjectStore();
  const [todoText, setTodoText] = useState("");
  const [projectText, setProjectText] = useState("");
  const [selection, setSelection] = useState("todo");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selection === "todo" && todoText.trim()) {
      addTodo(todoText);
      setTodoText("");
    } else if (selection === "project" && projectText.trim()) {
      addProject(projectText);
      setProjectText("");
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <BodyText>Enter a new {selection === "todo" ? "task" : "project"}</BodyText>

      <div className="input-container">
        <div>
          <label>
            <input
              type="radio"
              name="selection"
              value="todo"
              checked={selection === "todo"}
              onChange={() => setSelection("todo")}
            />
            To-Do
          </label>
          <label>
            <input
              type="radio"
              name="selection"
              value="project"
              checked={selection === "project"}
              onChange={() => setSelection("project")}
            />
            Project
          </label>
        </div>

        {selection === "todo" ? (
          <textarea
            value={todoText}
            onChange={(e) => setTodoText(e.target.value)}
            placeholder="Task description"
            className="textarea"
          />
        ) : (
          <textarea
            value={projectText}
            onChange={(e) => setProjectText(e.target.value)}
            placeholder="Project description"
            className="textarea"
          />
        )}

        <AddTodoButton type="submit" />
      </div>
    </form>
  );
};
