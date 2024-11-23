//The AddTask component uses the addTask function from the store to add a new task and the form. 

import { useState } from "react";
import { useTaskStore } from "../stores/useTaskStore";
import { styled } from "styled-components";

const Form = styled.form`
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 30px 10px 15px 10px;
  border: solid grey;
  background-color: #f2f0f0;
  border-width: thin;
  box-shadow: 5px 5px 0px black;

  @media (max-width: 500px) {
    max-width: 90%;
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
  background: #bea9df;
  box-shadow: 5px 5px 7px rgba(33, 33, 33, 0.7);
  border-radius: 5px;
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
  const [title, setTitle] = useState(""); // Local state for input
  const { addTask, getTotalTasks, getCompletedTasks } = useTaskStore(); // Access the store's addTask function and task count functions
  const [errorMessage, setErrorMessage] = useState(""); // Error message state

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page reload on form submission
    const trimmedTitle = title.trim();

    if (!trimmedTitle) {
      setErrorMessage("Task cannot be empty.");
      return;
    }

    if (trimmedTitle.length > 140) {
      setErrorMessage("Your task cannot be more than 140 characters long.");
      return;
    }

    setErrorMessage(""); // Clear error message
    addTask(trimmedTitle); // Add the task to the global store
    setTitle(""); // Clear input field
  };

  // Fetch the total and completed task counts
  const totalTasks = getTotalTasks();
  const completedTasks = getCompletedTasks();

  // Handle Enter key to submit the form
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      const trimmedTitle = title.trim();
      if (!trimmedTitle) {
        setErrorMessage("Task cannot be empty.");
        return;
      }
      handleSubmit(event);
    }
  };

  return (
    <div className="add-task">
      <Form onSubmit={handleSubmit}>
        <VisuallyHidden as="label" htmlFor="addTask">
          Write a task:
        </VisuallyHidden>

        <Textarea
          id="addTask"
          name="addTask"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          onKeyDown={handleKeyDown} // Listen for the Enter key press
          rows="2"
          cols="40"
          placeholder="New task..."
        />
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        <Button type="submit" disabled={!title.trim()}>Add task</Button>
      </Form>

      {/* Conditionally render the counter only if there are tasks */}
      {totalTasks > 0 && (
        <CounterContainer>
          <p>
            Completed Tasks: <strong>{completedTasks}</strong> /{" "}
            <strong>{totalTasks}</strong>
          </p>
        </CounterContainer>
      )}
    </div>
  );
};
