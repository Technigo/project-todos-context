import clsx from "clsx";
import { useState } from "react";
import useTaskStore from "../stores/useTaskStore";
import AddTaskForm from "./AddTaskForm";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";
import { Trash, Edit, GripVertical } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

// Drag and drop modules
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

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

  // Sortable setup
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: task.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <li
      ref={setNodeRef}
      style={style}
      className="flex items-center justify-between shadow gap-1 md:gap-2 px-1 py-1 md:px-3 md:py-2 border-slate-200 border rounded has-[.is-completed]:line-through has-[.is-completed]:bg-green-100 has-[.is-completed]:border-green-600 has-[.is-overdue]:bg-red-100 has-[.is-overdue]:border-red-600"
    >
      <div
        className={clsx(
          "flex items-center gap-1 md:gap-4 py-1 md:py-2 md:px-1 rounded w-full cursor-pointer",
          task.isCompleted && "group is-completed",
          isOverdue && "group is-overdue"
        )}
        id={task.id}
      >
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                {...attributes}
                {...listeners}
                className="cursor-grab p-2 border border-transparent group-[.is-completed]:hover:bg-white group-[.is-completed]:hover:border-green-500"
                aria-label="Drag to reorder"
                variant="ghost"
              >
                <GripVertical />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="top">Drag to reorder</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <Label className="cursor-pointer text-sm md:text-md font-regular flex items-center gap-3 md:gap-4 w-full">
          <Checkbox
            id={task.id}
            checked={task.isCompleted}
            onCheckedChange={() => toggleTaskCompletion(listId, task.id)}
          />
          <div>
            {task.title}
            {task.dueDate && (
              <p className="text-xs md:text-sm">
                <span className="mr-1">Due:</span>
                <span className="font-regular">{task.dueDate}</span>
              </p>
            )}
          </div>
        </Label>
      </div>

      <div className="flex items-center gap-1 md:gap-2">
        {/* Edit Task Button */}
        <Dialog
          open={isEditDialogOpen}
          onOpenChange={setIsEditDialogOpen}
        >
          <TooltipProvider delayDuration={0}>
            <Tooltip>
              <TooltipTrigger asChild>
                <DialogTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className={clsx(
                      "border border-transparent",
                      task.isCompleted &&
                        "hover:bg-white hover:border-green-400",
                      isOverdue && "hover:bg-white hover:border-red-400"
                    )}
                  >
                    <Edit />
                  </Button>
                </DialogTrigger>
              </TooltipTrigger>
              <TooltipContent side="top">Edit task</TooltipContent>
            </Tooltip>
          </TooltipProvider>
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
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => deleteTask(listId, task.id)}
                className={clsx(
                  "border border-transparent",
                  task.isCompleted && "hover:bg-white hover:border-green-400",
                  isOverdue && "hover:bg-white hover:border-red-400"
                )}
              >
                <Trash />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="top">Delete task</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </li>
  );
};

export default TaskListItem;
