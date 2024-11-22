import React, { useState } from "react";
import { CategoryList } from "./CategoryList";
import { AddTaskButton } from "./AddTaskButton";
import { Header } from "./Header";

export function TaskManager() {
  const [categories, setCategories] = useState([]);
  const [availableCategories, setAvailableCategories] = useState([]);
  const [title, setTitle] = useState("Checklist"); // Header title state

  // Add a new category or task
  function handleAddTask({ category, task, date }) {
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
        setAvailableCategories((prev) => [...prev, category]);
        return [...prevCategories, newCategory];
      }
    });
  }

  // Toggle task completion
  function toggleTaskCompletion(categoryId, taskId) {
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
  }

  // Delete a task
  function handleDeleteTask(categoryId, taskId) {
    setCategories((prevCategories) =>
      prevCategories.map((category) =>
        category.id === categoryId
          ? {
              ...category,
              tasks: category.tasks.filter((task) => task.id !== taskId),
            }
          : category
      )
    );
  }

  // Delete a category
  function handleDeleteCategory(categoryId) {
    setCategories((prevCategories) => {
      const updatedCategories = prevCategories.filter(
        (category) => category.id !== categoryId
      );
      // Update availableCategories
      const updatedAvailableCategories = updatedCategories.map(
        (category) => category.title
      );
      setAvailableCategories(updatedAvailableCategories);
      return updatedCategories;
    });
  }

  return (
    <>
      <Header title={title} onTitleChange={setTitle} />
      <CategoryList
        categories={categories}
        onToggleTask={toggleTaskCompletion}
        onDeleteTask={handleDeleteTask}
        onDeleteCategory={handleDeleteCategory} // Pass delete category function
      />
      <AddTaskButton
        availableCategories={availableCategories}
        onAddTask={handleAddTask}
      />
    </>
  );
}
