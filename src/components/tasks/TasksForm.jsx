import styled from "styled-components";
import { useState } from "react";
import { useTaskStore } from "../../stores/useTaskStore";

const Form = styled.form`
  width: 500px;
  height: 130px;
  display: flex;
  flex-direction: column;
  gap: 8px;
@media (max-width: 480px) {
  width: 300px;
}
@media (min-width:425px) and (max-width:580px) {
  width: 400px;
}
@media (min-width: 1024px) {
  width: 600px;
}
`;

const Input = styled.input`
height: 70px;
border: 1px solid #32231c;
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
@media (min-width: 1024px) {
  &:focus{
    font-size: 20px;
  }
  &::placeholder{
    font-size: 20px;
  }
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
@media (min-width: 1024px) {
  font-size: 18px;
  width: 170px;
}
`;

export const TaskForm = () => {
  const { addTask, setAddTask, setTasks } = useTaskStore();
  const [placeholder, setPlaceholder] = useState("What do I need to do?");

  const handleSubmit = (event) => {
    event.preventDefault();
    setTasks(addTask); 
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