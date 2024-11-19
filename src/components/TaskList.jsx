import useTaskStore from "../stores/useTaskStore";
import TaskListItem from "./TaskListItem";
import { Button } from "./ui/button";

const TaskList = () => {
  const tasks = useTaskStore((state) => state.tasks);
  const clearCompletedTasks = useTaskStore((state) => state.clearCompleted);
  const hasCompletedTasks = tasks.some((task) => task.isCompleted);

  return (
    <>
      {tasks.length === 0 ? (
        <p>Let's start with adding your very first task.</p>
      ) : (
        <>
          <ul className="flex flex-col gap-3">
            {tasks.map((task) => (
              <li
                key={task.id}
                className="flex items-center justify-between shadow gap-2 px-4 py-2 border-slate-200 border rounded has-[.is-overdue]:bg-red-100 has-[.is-overdue]:border-red-600"
              >
                <TaskListItem task={task} />
              </li>
            ))}
          </ul>
          {hasCompletedTasks && (
            <Button
              variant="secondary"
              size="sm"
              onClick={clearCompletedTasks}
            >
              Clear completed tasks
            </Button>
          )}
        </>
      )}
    </>
  );
};

export default TaskList;
