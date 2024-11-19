import clsx from "clsx";
import useTaskStore from "../stores/useTaskStore";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";
import { Trash } from "lucide-react";

const TaskListItem = ({ task }) => {
  const toggleTaskCompletion = useTaskStore(
    (state) => state.toggleTaskCompletion
  );
  const deleteTask = useTaskStore((state) => state.deleteTask);

  // Determine if the task is overdue
  const isOverdue =
    task.dueDate && new Date(task.dueDate) < new Date() && !task.isCompleted;

  return (
    <>
      <div
        className={clsx(
          "flex items-center gap-2 p-2 rounded", // Always included classes
          task.isCompleted && "is-completed",
          isOverdue && "is-overdue"
        )}
      >
        <Checkbox
          id={task.id}
          checked={task.isCompleted}
          onCheckedChange={() => toggleTaskCompletion(task.id)}
        />
        <Label htmlFor={task.id}>{task.title}</Label>
      </div>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => deleteTask(task.id)}
      >
        <Trash />
      </Button>
    </>
  );
};

export default TaskListItem;
