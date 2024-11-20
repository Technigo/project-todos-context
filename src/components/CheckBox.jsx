import { useToDoStore } from "../stores/useToDoStore";
import "./CheckBox.css";

export const Checkbox = ({ todo }) => {
  const { toggleTodo } = useToDoStore();

  const handleChange = () => {
    toggleTodo(todo.id);
  };

  return (
    <div className="checkbox-wrapper-59">
      <label className="switch">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={handleChange}
        />
        <span className="slider"></span>
      </label>
    </div>
  );
};
