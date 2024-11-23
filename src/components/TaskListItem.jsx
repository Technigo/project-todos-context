import clsx from "clsx";
import { useState } from "react";
import useTaskStore from "../stores/useTaskStore";
import AddTaskForm from "./AddTaskForm";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";
import { Trash, Edit } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

const TaskListItem = ({ task, listId }) => {
  const toggleTaskCompletion = useTaskStore(
    (state) => state.toggleTaskCompletion
  );
  const deleteTask = useTaskStore((state) => state.deleteTask);
  const editTask = useTaskStore((state) => state.editTask);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);

  // Determine if the task is overdue
  const isOverdue =
    task.dueDate && new Date(task.dueDate) < new Date() && !task.isCompleted;

  const handleEditTask = (data) => {
    editTask(listId, task.id, {
      title: data.title.trim(),
      dueDate: data.dueDate || null,
    });
    setIsEditDialogOpen(false);
  };

  return (
    <>
      <div
        className={clsx(
          "flex items-center gap-3 py-2 px-1 rounded w-full cursor-pointer", // Always included classes
          task.isCompleted && "group is-completed",
          isOverdue && "group is-overdue"
        )}
        id={task.id}
        checked={task.isCompleted}
        onClick={() => toggleTaskCompletion(listId, task.id)}
      >
        <Checkbox
          id={task.id}
          checked={task.isCompleted}
          onCheckedChange={() => toggleTaskCompletion(listId, task.id)}
        />
        <div>
          <Label
            htmlFor={task.id}
            className="cursor-pointer"
          >
            {task.title}
          </Label>
          <p className="text-sm">{task.dueDate}</p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        {/* Edit Task Button */}
        <Dialog
          open={isEditDialogOpen}
          onOpenChange={setIsEditDialogOpen}
        >
          <DialogTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
            >
              <Edit />
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit Task</DialogTitle>
            </DialogHeader>
            <AddTaskForm
              initialValues={{
                title: task.title,
                dueDate: task.dueDate || "",
              }}
              onSubmit={handleEditTask}
              onSuccess={() => setIsEditDialogOpen(false)}
            />
          </DialogContent>
        </Dialog>

        {/* Delete Task Button */}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => deleteTask(listId, task.id)}
        >
          <Trash />
        </Button>
      </div>
    </>
  );
};

export default TaskListItem;
