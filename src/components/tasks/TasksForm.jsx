import styled from "styled-components";
import { useState } from "react";
import { useTaskStore } from "../../stores/useTaskStore";

const Form = styled.form`
width: 500px;
height: 100px;
display: flex;
flex-direction: column;
gap: 8px;
`;

const Input = styled.input`
height: 50px;
border: 1px solid #32231c;
/* border-top: none; 
border-right: none;
border-left: none; */
/* border-top: 1px dotted #b4b3b3; 
border-right: 1px dotted #b4b3b3;
border-left: 1px dotted #b4b3b3; */
&:focus {
  outline: none; 
  padding-left: 15px;
  font-family: courier, monospace;
  font-size: 16px;
  color: black;
}
&::placeholder{
  color: black;
  font-family: courier, monospace;
  font-size: 16px;
  padding-left: 15px;
  }
`;

const TaskButton = styled.button`
  width: 150px;
  padding: 5px;
  border-radius: 15px;
  border: 1px solid #32231c;
  background-color: inherit;
  color: black;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s ease, color 0.2s ease;
  &:hover {
  background-color: white; 
  color: black; 
}
`;

export const TaskForm = () => {
  const { addTask, setAddTask, setTasks } = useTaskStore();
  const [placeholder, setPlaceholder] = useState("What do I need to do?");

  const handleSubmit = (event) => {
    event.preventDefault();
    setTasks(addTask); // Adds the task
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={addTask}
        onChange={(event) => setAddTask(event.target.value)}
        placeholder={placeholder}
        onFocus={() => setPlaceholder("")}
        onBlur={() => setPlaceholder("What do I need to do?")}
      />
      <TaskButton type="submit">+ Add Task</TaskButton>
    </Form>
  );
};