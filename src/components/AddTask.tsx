//The AddTask component uses the addTask function from the store to add a new task and the form. 

import { useState } from "react";
import { useTaskStore } from "../stores/useTaskStore";
import { styled } from "styled-components";

const Form = styled.form`
  width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100%;
  padding: 30px 10px 15px 10px;
  background-color: #f2f0f0;
  /* border-width: thin; */
  box-shadow: 5px 5px 0px black;

  @media (max-width: 500px) {
    max-width: 95%;
  }
`;

const Textarea = styled.textarea`
  resize: none;
  padding: 15px;
  margin: 0px 0px 10px;
  max-width: 450px;
  width: 100%;
  box-sizing: border-box;
  font-size: 18px;
`;

const VisuallyHidden = styled.span`
  display: none;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 9rem;
  height: 2.5rem;
  padding: 0.5rem;
  background: #9AC4C0;
  box-shadow: 5px 5px 7px rgba(33, 33, 33, 0.7);
  border-radius: 15px;
  color: #000;
  margin: 0;
  margin-top: 10px;
  font-size: 16px;
  font-family: "Poppins";
`;

const CounterContainer = styled.div`
  margin-top: 20px;
  font-size: 18px;
  color: #FFF;
  font-family: "Poppins", sans-serif;
  text-align: center;
`;

export const AddTask = () => {
  const [title, setTitle] = useState<string>("");
  const { addTask, getTotalTasks, getCompletedTasks } = useTaskStore();
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const trimmedTitle: string = title.trim();

    if (!trimmedTitle) {
      setErrorMessage("Task cannot be empty.");
      return;
    }

    if (trimmedTitle.length > 100) {
      setErrorMessage("Task cannot be more than 100 characters.");
      return;
    }

    setErrorMessage("");
    addTask(trimmedTitle);
    setTitle("");
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>): void => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSubmit(event as unknown as React.FormEvent<HTMLFormElement>);
    }
  };

  const totalTasks = getTotalTasks();
  const completedTasks = getCompletedTasks();

  return (
    <div className="add-task">
      <Form onSubmit={handleSubmit}>
        <VisuallyHidden as="label" htmlFor="addTask">Write a task:</VisuallyHidden>

        <Textarea
          id="addTask"
          name="addTask"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          onKeyDown={handleKeyDown}
          rows={2}
          cols={40}
          placeholder="New task..."
        />
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        <Button type="submit" disabled={!title.trim()}>Add task</Button>
      </Form>

      {totalTasks > 0 && (
        <CounterContainer>
          <p>
            Completed Tasks: <strong>{completedTasks}</strong> / <strong>{totalTasks}</strong>
          </p>
        </CounterContainer>
      )}
    </div>
  );
};
