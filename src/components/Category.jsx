import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { TaskItem } from "./TaskItem";
import deleteIcon from "../assets/icons/delete.png";

const CategoryContainer = styled.div`
  margin-bottom: 2rem;
`;

const CategoryHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #ffffff;
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const Divider = styled.hr`
  border: 0;
  border-top: 1px solid #333;
  margin-bottom: 1rem;
`;

const DotsMenu = styled.div`
  font-size: 1.25rem;
  color: #6c757d;
  cursor: pointer;

  &:hover {
    color: #ffffff;
  }
`;

const DeleteButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  background: #434343;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 0.5rem 0.75rem;
  font-size: 0.85rem;
  cursor: pointer;
  position: absolute;
  top: 1.5rem;
  right: 0;
  z-index: 1;

  &:hover {
    background: #604040;
  }

  img {
    width: 16px;
    height: 16px;
  }
`;

export function Category({ category, onToggleTask, onDeleteTask, onDeleteCategory }) {
  const [menuVisible, setMenuVisible] = useState(false);
  const menuRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    function handleOutsideClick(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuVisible(false);
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <CategoryContainer>
      <CategoryHeader>
        <span>
          {category.title} <small>{category.tasks.length}</small>
        </span>
        <div ref={menuRef} style={{ position: "relative" }}>
          <DotsMenu onClick={() => setMenuVisible(!menuVisible)}>•••</DotsMenu>
          {menuVisible && (
            <DeleteButton onClick={() => onDeleteCategory(category.id)}>
              Delete
              <img src={deleteIcon} alt="Delete" />
            </DeleteButton>
          )}
        </div>
      </CategoryHeader>
      <Divider />
      {category.tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          categoryId={category.id}
          onToggle={onToggleTask}
          onDelete={onDeleteTask}
        />
      ))}
    </CategoryContainer>
  );
}
