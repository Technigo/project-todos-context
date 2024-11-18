import { CheckButton } from "./CheckButton";
import { RemoveButton } from "./RemoveButton";
import moment from "moment";

export const ListRender = ({ array }) => {
  return (
    <div>
      {array.map((todo) => (
        <div className="todo-container" key={todo.id}>
          <div className={todo.complete ? "todo complete" : "todo"}>
            <CheckButton todo={todo} />

            <RemoveButton todo={todo} />

            {todo.complete ? (
              <p className="timestamp">Completed: {moment().calendar()} </p>
            ) : (
              <p className="timestamp">Added: {todo.date}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
