//Component for single task

import { useTodoStore } from "../store/useTodoStore";
import DeleteIcon from "../assets/DeleteIcon.svg";
import "../components/TodoItem.css";

interface TodoItemProps {
  id: number;
}

export const TodoItem =({ id }: TodoItemProps) => {
  const todo = useTodoStore((state) => state.todos.find((todo) => todo.id === id)); //Find the specific to-do
  const toggleTodo = useTodoStore((state) => state.toggleTodo); //Access toggle function from Zustand
  const deleteTodo = useTodoStore ((state) => state.deleteTodo); //Access delete function

  //Handle checkbox toggle
  const handleCheckboxChange = () => {
    toggleTodo(id); //Toggle the to-do's completed status when checkbox is clicked
  };

  //Handle delete button
  const handleDeleteClick = () => {
    deleteTodo(id); //Remove the task from list
  };

  if (!todo) return null;

  return (
    <div className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={handleCheckboxChange} //When checked or unchecked it triggers toggle
        id={`todo-${todo.id}`}
        className="checkbox"
      />
      <label htmlFor={`todo-${todo.id}`}>{todo.text}</label>
      {/* Delete clickable icon */}
      <img
        src={DeleteIcon}
        alt="Pastel green bin button"
        onClick={handleDeleteClick} 
        className="delete-icon"
      />
    </div>
  );
};
