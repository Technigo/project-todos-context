export const TodoListForm = ({
  keyword,
  type,
  checked,
  onChange,
  style,
  todo,
  onClick,
  task,
  taskName,
}) => {
  return (
    <ul style={{ listStyle: "none" }}>
      <li key={keyword}>
        <div className="todo-list">
          <input
            type={type}
            checked={checked}
            onChange={onChange}
            id={task}
            name="todo"
          />
          <label
            style={style}
            htmlFor={taskName}
            aria-labelledby="tasks on todo list"
          >
            {todo}
          </label>{" "}
          <div className="deletBtn">
            <button onClick={onClick}>🗑️</button>
          </div>
        </div>
      </li>
    </ul>
  );
};
