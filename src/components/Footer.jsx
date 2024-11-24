import React from "react";
import styled from "styled-components";
import { useTaskStore } from "../contexts/store";

const FooterContainer = styled.footer`
  padding: 1rem;
  text-align: center;
  border-top: 1px solid #ddd;
  background-color: #ffffff;
`;

const ProgressBar = styled.div`
  height: 10px;
  background-color: #f0f0f0;
  border-radius: 8px;
  margin: 0.5rem 0;
  position: relative;

  div {
    height: 100%;
    background-color: #007bff;
    width: ${({ progress }) => progress}%;
    border-radius: 8px;
    transition: width 0.3s ease-in-out;
  }
`;

const Stats = styled.p`
  font-size: 0.9rem;
  color: #6c757d;
`;

const Button = styled.button`
  margin-top: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export const Footer = () => {
  const tasks = useTaskStore((state) => state.tasks);
  const markAllCompleted = useTaskStore((state) => state.markAllCompleted);

  //to calculate progress and credits
  const completedTasks = tasks.filter((task) => task.completed).length;
  const totalTasks = tasks.length;
  const progress = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;
  const creditsEarned = completedTasks * 10;

  return (
    <FooterContainer>
      <ProgressBar progress={progress}>
        <div></div>
      </ProgressBar>
      <Stats>
        {progress.toFixed(0)}% progress · {creditsEarned} credits earned
      </Stats>
      <Button onClick={markAllCompleted}>Mark All as Complete</Button>
    </FooterContainer>
  );
};
