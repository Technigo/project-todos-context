import { useToDoStore } from "../stores/useToDoStore";
import "./CheckBox.css";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface CheckboxProps {
  todo: Todo;
}

export const Checkbox: React.FC<CheckboxProps> = ({ todo }) => {
  const { toggleTodo } = useToDoStore();

  const handleChange = () => {
    toggleTodo(todo.id);
  };

  return (
    <div className="checkbox-wrapper">
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