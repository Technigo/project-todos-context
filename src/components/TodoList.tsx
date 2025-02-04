import useTodoStore from "../store/useTodoStore";
import TodoItem from "./TodoItem";

const TodoList: React.FC = () => {
  const tasks = useTodoStore((state) => state.tasks);

  if (tasks.length === 0) {
    return (
      <div className="empty-state">
        <p>No tasks available. Add a task to get started!</p>
      </div>
    );
  }

  return (
    <ul aria-label="Todo List">
      {tasks.map((task) => (
        <TodoItem key={task.id} task={task} />
      ))}
    </ul>
  );
};

export default TodoList;
