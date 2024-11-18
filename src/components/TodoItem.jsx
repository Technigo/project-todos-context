import { RxCross1 } from "react-icons/rx"
import moment from "moment"
import "./TodoItem.css"

export const Todo = ({
  id,
  completed,
  onChange,
  todo,
  createdAt,
  removeTodo,
}) => {
  return (
    <div className="todo-item">
      <li
        key={id} 
      >
        <div className="list-item">
          <div className="list-text">
            <input
              id={id}
              className="checkbox"
              type="checkbox"
              checked={completed} 
              onChange={onChange} 
            />
            <label
              htmlFor={id}
              className={`todo-text ${completed ? "completed" : ""}`}>
              {todo}
            </label>
            <div className={`todo-time ${completed ? "completed" : ""}`}>
              {moment(createdAt).format("YYYY-MM-DD HH:mm")}
            </div>
          </div>

          <div className="remove-button">
            <button onClick={() => removeTodo(id)}>
              <RxCross1 className="remove-icon" />
            </button>
          </div>
        </div>
      </li>
    </div>
  )
}
