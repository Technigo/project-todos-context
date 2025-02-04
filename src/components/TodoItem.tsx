import { useState, KeyboardEvent, ChangeEvent, FocusEvent } from "react";
import useTodoStore from "../store/useTodoStore";
import { Task } from "../types";
import { MdModeEdit, MdDelete } from "react-icons/md";
import { format } from "date-fns";

interface TodoItemProps {
  task: Task;
}

const TodoItem: React.FC<TodoItemProps> = ({ task }) => {
  const toggleTask = useTodoStore((state) => state.toggleTask);
  const removeTask = useTodoStore((state) => state.removeTask);
  const editTask = useTodoStore((state) => state.editTask);

  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editedTitle, setEditedTitle] = useState<string>(task.title);

  const handleEdit = () => {
    if (isEditing && editedTitle.trim()) {
      editTask(task.id, editedTitle.trim());
    }
    setIsEditing(!isEditing);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleEdit();
    }
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    handleEdit();
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEditedTitle(e.target.value);
  };

  return (
    <li className="todo-item">
      <label>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(task.id)}
          aria-checked={task.completed}
        />
        {isEditing ? (
          <input
            type="text"
            value={editedTitle}
            onChange={handleChange}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            autoFocus
            aria-label={`Edit task ${task.title}`}
          />
        ) : (
          <span className={task.completed ? "completed" : ""}>
            {task.title}
          </span>
        )}
      </label>
      <span className="timestamp" aria-label={`Created at ${task.createdAt}`}>
        {format(new Date(task.createdAt), "PPpp")}
      </span>
      <div className="todo-actions">
        <button
          onClick={handleEdit}
          aria-label={isEditing ? "Save Task" : "Edit Task"}
        >
          <MdModeEdit className="h-5 w-5" />
        </button>
        <button
          onClick={() => removeTask(task.id)}
          aria-label={`Remove ${task.title}`}
        >
          <MdDelete className="h-5 w-5" />
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
