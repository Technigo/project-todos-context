import { useAppData } from "../../contexts/FormContext";
import { EmptyList } from "../emptyUx/EmptyList"
import { TodoListForm } from "./TodoListForm";
import "./todoList.css";

export const TodoList = () => {
  const { todos, removeTask, toggleTodo, clearAllTask } = useAppData();

  const handleRemoveTask = (taskToRemove) => {
    removeTask(taskToRemove);
  };

  const handleToggle = (index, completed) => {
    toggleTodo(index, !completed);
  };

  const completedTaskAmount = todos.filter((todo) => todo.completed).length;

  return (
    <div className="todo-list-container">
      {todos.length > 0 ? (
        <>
          <div  className="todo">
            {todos.map((todo, index) => (
              <TodoListForm
                keyword={index}
                type={"checkbox"}
                task={todo.text}
                taskName={todo.text}
                checked={todo.completed}
                onChange={() => handleToggle(index, todo.completed)}
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
                todo={todo.text}
                onClick={() => handleRemoveTask(todo)}
              />
            ))}
          </div>
          <div className="completeAmount">
          <p aria-label="completed tasks amount">
             🥐 Completed {completedTaskAmount}/{todos.length}
            </p>
          </div>
        </>
      ) : (
        <EmptyList />
      )}
    </div>
  );
};