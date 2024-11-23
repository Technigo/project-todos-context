import { useState } from "react";
import useTaskStore from "../stores/useTaskStore";
import TaskListItem from "./TaskListItem";
import AddTaskForm from "./AddTaskForm";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

const TaskList = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const lists = useTaskStore((state) => state.lists);
  const selectedListId = useTaskStore((state) => state.selectedListId);
  const addTask = useTaskStore((state) => state.addTask);
  const clearCompletedTasks = useTaskStore((state) => state.clearCompleted);

  // Find the selected list
  const selectedList = lists.find((list) => list.id === selectedListId);
  if (!selectedList) return <h1>No list selected.</h1>;

  const hasCompletedTasks = selectedList.tasks.some((task) => task.isCompleted);

  // onSubmit handler for adding a task
  const handleAddTask = (data) => {
    addTask(selectedListId, {
      title: data.title.trim(),
      dueDate: data.dueDate || null,
    });
  };

  return (
    <>
      <h1>{selectedList.name}</h1>
      <ul className="flex flex-col gap-3">
        {selectedList.tasks.map((task) => (
          <li
            key={task.id}
            className="flex items-center justify-between shadow gap-2 px-4 py-2 border-slate-200 border rounded has-[.is-completed]:line-through has-[.is-completed]:bg-green-100 has-[.is-completed]:border-green-600 has-[.is-overdue]:bg-red-100 has-[.is-overdue]:border-red-600"
          >
            <TaskListItem
              task={task}
              listId={selectedList.id}
            />
          </li>
        ))}
      </ul>

      <div className="flex items-center justify-between gap-4">
        <Dialog
          open={isDialogOpen}
          onOpenChange={setIsDialogOpen}
        >
          <DialogTrigger asChild>
            <Button
              variant="default"
              size="lg"
            >
              Create new task
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create new task</DialogTitle>
            </DialogHeader>
            <AddTaskForm
              onSuccess={() => setIsDialogOpen(false)}
              onSubmit={handleAddTask}
            />
          </DialogContent>
        </Dialog>

        {hasCompletedTasks && (
          <Button
            variant="ghost"
            size="lg"
            onClick={() => clearCompletedTasks(selectedList.id)}
          >
            Clear completed tasks
          </Button>
        )}
      </div>
    </>
  );
};

export default TaskList;
