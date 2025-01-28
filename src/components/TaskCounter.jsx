import useTodoStore from "../store/useTodoStore";

const TaskCounter = () => {
  const tasks = useTodoStore((state) => state.tasks);
  const total = tasks.length;
  const uncompleted = tasks.filter((task) => !task.completed).length;

  return (
    <div className="task-counter">
      <p>Total Tasks: {total}</p>
      <p>Uncompleted Tasks: {uncompleted}</p>
    </div>
  );
};

export default TaskCounter;
