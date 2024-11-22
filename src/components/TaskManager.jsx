import React, { useState } from "react";
import { CategoryList } from "./CategoryList";
import { AddTaskButton } from "./AddTaskButton";
import styled from "styled-components";
import emptyFolder from "../assets/icons/empty-folder.png";
import { Header } from "./Header";

const EmptyStateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 150px); /* Adjust based on header and bottomsheet */
  text-align: center;
  color: #6c757d;
`;

const EmptyIcon = styled.img`
  width: 120px;
  height: auto;
  margin-bottom: 1rem;
  filter: invert(1);
`;

const EmptyText = styled.p`
  font-size: 1.2rem;
  color: #6c757d;
`;

export function TaskManager() {
  const [categories, setCategories] = useState([]);
  const [availableCategories, setAvailableCategories] = useState([]);
  const [title, setTitle] = useState("Checklist");

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
      {categories.length === 0 ? (
        <EmptyStateContainer>
          <EmptyIcon src={emptyFolder} alt="Empty folder icon" />
          <EmptyText>Add some items to your checklist to get started!</EmptyText>
        </EmptyStateContainer>
      ) : (
        <CategoryList
          categories={categories}
          onToggleTask={toggleTaskCompletion}
          onDeleteTask={handleDeleteTask}
          onDeleteCategory={handleDeleteCategory}
        />
      )}
      <AddTaskButton
        availableCategories={availableCategories}
        onAddTask={handleAddTask}
      />
    </>
  );
}
