//The AddTask component uses the addTask function from the store to add a new task and the form. 

import { useState } from "react";
import { useTaskStore } from "../stores/useTaskStore";
import { styled } from "styled-components"

const Form = styled.form`
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 30px;
  border: solid grey;
  background-color: #F2F0F0;
  border-width: thin;
  box-shadow: 10px 5px 0px black;

  @media (max-width: 500px )  { 
  max-width: 300px;

  }
    
  `
const Textarea = styled.textarea`
  resize: none;
  padding: 15px;
  margin: 0px 0px 10px;
  max-width: 450px;
  width: 100%;
  box-sizing: border-box;
  font-size: 18px;
  /* Ensures mobile browsers don’t zoom in */

`

const VisuallyHidden = styled.span`
  display: none; 

`
const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 9rem;
  height: 2.5rem;
  padding: 0.5rem;
  background: #BEA9DF;
  box-shadow: 5px 5px 7px rgba(33,33,33,.7);
  border-radius: 5px; 
  color: #000; 
  margin: 0; 
  margin-top: 10px; 
  font-size: 16px; 
  font-family: "Poppins";
`;

export const AddTask = () => {
  const [title, setTitle] = useState(''); // Local state for input
  const { addTask } = useTaskStore(); // Access the store's addTask function
  const [errorMessage, setErrorMessage] = useState(''); // Error message state

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the page from refreshing on form submission.

    const trimmedTitle = title.trim();

    // Check for maximum character count
    if (trimmedTitle.length > 100) {
      setErrorMessage("Your task cannot be more than 100 characters long.");
      return; // Exit the function early if input is too long.
    }

    // Clear any previous error messages and add the task
    setErrorMessage('');
    addTask(trimmedTitle); // Add the task to the global state
    setTitle(''); // Clear the input field
  };

  return (
    <div className="add-task">
      <Form onSubmit={handleSubmit}>
        {/* Label for accessibility (hidden visually but helps screen readers) */}
        <VisuallyHidden as="label" htmlFor="addTask">
          Write a task:
        </VisuallyHidden>

        {/* Text area where users type their thought */}
        <Textarea
          id="addTask" // Links label to this textarea for accessibility
          name="addTask" // Sets name for form submission
          value={title} // Binds the input field to the 'title' state.
          onChange={(event) => setTitle(event.target.value)} // Updates 'title' when input changes.
          rows="2" // Set number of rows of textarea
          cols="40" // Set width of textarea
          aria-required="true" // Accessibility: Indicates the field is required.
          aria-describedby="addTaskHelp" // Links to help text for screen readers.
          placeholder="New task..." // Placeholder text when textarea is empty.
        />
        {/* Display error message */}
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        {/* Button to submit the task */}
        <Button type="submit" aria-label="Add task">
          Add task
        </Button>
      </Form>
    </div>
  );
};
