import React, { useState } from "react";
import { CategoryList } from "./CategoryList";
import { AddTaskButton } from "./AddTaskButton";

export const TaskManager = () => {
  const [categories, setCategories] = useState([]);
  const [availableCategories, setAvailableCategories] = useState([]);

  // Add a new category or task
  const handleAddTask = ({ category, task, date }) => {
    setCategories((prevCategories) => {
      const existingCategory = prevCategories.find((c) => c.title === category);

      if (existingCategory) {
        existingCategory.tasks.push({
          id: Date.now(),
          name: task,
          date: date || "No Deadline",
          completed: false,
        });
        return [...prevCategories];
      } else {
        const newCategory = {
          id: Date.now(),
          title: category,
          tasks: [
            {
              id: Date.now(),
              name: task,
              date: date || "No Deadline",
              completed: false,
            },
          ],
        };
        setAvailableCategories([...availableCategories, category]);
        return [...prevCategories, newCategory];
      }
    });
  };

  // Toggle task completion
  const toggleTaskCompletion = (categoryId, taskId) => {
    setCategories((prevCategories) =>
      prevCategories.map((category) =>
        category.id === categoryId
          ? {
              ...category,
              tasks: category.tasks.map((task) =>
                task.id === taskId
                  ? { ...task, completed: !task.completed }
                  : task
              ),
            }
          : category
      )
    );
  };

  // Handle drag-and-drop
  const handleDragAndDrop = (categoryId, sourceIndex, destinationIndex) => {
    setCategories((prevCategories) =>
      prevCategories.map((category) => {
        if (category.id === categoryId) {
          const updatedTasks = Array.from(category.tasks);
          const [movedTask] = updatedTasks.splice(sourceIndex, 1);
          updatedTasks.splice(destinationIndex, 0, movedTask);
          return { ...category, tasks: updatedTasks };
        }
        return category;
      })
    );
  };

  return (
    <>
      <CategoryList
        categories={categories}
        onToggleTask={toggleTaskCompletion}
        onDragAndDrop={handleDragAndDrop}
      />
      <AddTaskButton
        availableCategories={availableCategories}
        onAddTask={handleAddTask}
      />
    </>
  );
};
