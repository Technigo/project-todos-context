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

// Drag n drop modules
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";

const TaskList = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const lists = useTaskStore((state) => state.lists);
  const selectedListId = useTaskStore((state) => state.selectedListId);
  const addTask = useTaskStore((state) => state.addTask);
  const clearCompletedTasks = useTaskStore((state) => state.clearCompleted);
  const reorderTasks = useTaskStore((state) => state.reorderTasks);

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

  // Stuff for drag and drop
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      const oldIndex = selectedList.tasks.findIndex(
        (task) => task.id === active.id
      );
      const newIndex = selectedList.tasks.findIndex(
        (task) => task.id === over.id
      );

      reorderTasks(selectedList.id, oldIndex, newIndex);
    }
  };

  return (
    <>
      <h1>{selectedList.name}</h1>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        modifiers={[restrictToVerticalAxis]}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={selectedList.tasks.map((task) => task.id)}
          strategy={verticalListSortingStrategy}
        >
          <ul className="flex flex-col gap-3">
            {selectedList.tasks.map((task) => (
              <TaskListItem
                key={task.id}
                listId={selectedList.id}
                task={task}
              />
            ))}
          </ul>
        </SortableContext>
      </DndContext>

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
          <DialogContent className="fixed md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 top-0 left-0 transform-none">
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
