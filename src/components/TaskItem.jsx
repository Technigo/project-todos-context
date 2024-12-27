import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import emptyIcon from "../assets/icons/empty.png";
import checkIcon from "../assets/icons/check.png";
import deleteIcon from "../assets/icons/delete.png";
import { useTaskStore } from "../contexts/store";

const TaskContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: ${({ completed }) => (completed ? "#1e1e1e" : "#121212")};
  border-radius: 8px;
  margin-bottom: 0.5rem;
  opacity: ${({ completed }) => (completed ? 0.9 : 1)};
`;

const TaskContent = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
`;

const Checkbox = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 1rem;
  cursor: pointer;
  filter: ${({ completed }) =>
    completed ? "none" : "invert(70%) brightness(1.2)"};
`;

const TaskTextWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const TaskText = styled.span`
  color: ${({ completed }) => (completed ? "#6c757d" : "#ffffff")};
  text-decoration: ${({ completed }) => (completed ? "line-through" : "none")};
`;

const Badge = styled.span`
  background-color: ${({ status }) =>
    status === "Today"
      ? "rgba(34, 139, 34, 0.2)"
      : status === "Overdue"
      ? "rgba(255, 68, 0, 0.226)"
      : "rgba(128, 128, 128, 0.3)"};
  color: ${({ status }) =>
    status === "Today" ? "#2bbe2b" : status === "Overdue" ? "#ff3300" : "#d2cfcf"};
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 600;
`;

const DotsMenu = styled.div`
  font-size: 1.25rem;
  color: #6c757d;
  cursor: pointer;
  position: relative;

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

export function TaskItem({ task, categoryId }) {
  const [menuVisible, setMenuVisible] = useState(false);
  const menuRef = useRef(null);

  const toggleTask = useTaskStore((state) => state.toggleTask);
  const deleteTask = useTaskStore((state) => state.deleteTask);

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

  const getBadgeStatus = () => {
    const today = new Date().toISOString().split("T")[0];
    const tomorrow = new Date(new Date().setDate(new Date().getDate() + 1))
      .toISOString()
      .split("T")[0];
    const taskDate = task.date;

    if (!taskDate || isNaN(new Date(taskDate).getTime())) return "No Date";
    if (taskDate === today) return "Today";
    if (taskDate === tomorrow) return "Tomorrow";
    if (new Date(taskDate) < new Date(today)) return "Overdue";
    return "Other";
  };

  const getFormattedDate = () => {
    const today = new Date().toISOString().split("T")[0];
    const tomorrow = new Date(new Date().setDate(new Date().getDate() + 1))
      .toISOString()
      .split("T")[0];
    const taskDate = task.date;

    if (!taskDate || isNaN(new Date(taskDate).getTime())) return "No Deadline";
    if (taskDate === today) return "Today";
    if (taskDate === tomorrow) return "Tomorrow";
    if (new Date(taskDate) < new Date(today)) return "Overdue";
    return new Date(taskDate).toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
    });
  };

  return (
    <TaskContainer completed={task.completed}>
      <TaskContent>
        <Checkbox
          src={task.completed ? checkIcon : emptyIcon}
          completed={task.completed}
          onClick={() => toggleTask(categoryId, task.id)}
        />
        <TaskTextWrapper>
          <TaskText completed={task.completed}>
            {task.name || "Unnamed Task"}
          </TaskText>
          <Badge status={getBadgeStatus()}>{getFormattedDate()}</Badge>
        </TaskTextWrapper>
      </TaskContent>
      <div ref={menuRef} style={{ position: "relative" }}>
        <DotsMenu onClick={() => setMenuVisible(!menuVisible)}>•••</DotsMenu>
        {menuVisible && (
          <DeleteButton onClick={() => deleteTask(categoryId, task.id)}>
            Delete
            <img src={deleteIcon} alt="Delete" />
          </DeleteButton>
        )}
      </div>
    </TaskContainer>
  );
}
