import { useTaskStore } from "../stores/TaskStore";
import styled from "styled-components";
import { useProjectStore } from "../stores/ProjectStore";
import { useState } from "react";
const Form = styled.form`
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
  padding: 1rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  flex: 1;
  font-size: 1rem;
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: #1a73e8;
  }
`;

const RadioGroup = styled.div`
  display: flex;
  gap: 1rem;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  cursor: pointer;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  background-color: #1a73e8;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #1557b0;
  }
`;

const ProjectSelect = styled.select`
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  flex: 1;
`;

export const TaskInput = () => {
  const { setNewTask, addTask, newTask, dueDate, setDueDate } = useTaskStore();
  const { projects } = useProjectStore();
  const [selectedProjectId, setSelectedProjectId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const category = formData.get("category");

    
    
    const projectId = selectedProjectId ? Number(selectedProjectId) : null;

    addTask(newTask, category, dueDate, projectId);
    setNewTask("");
    setSelectedProjectId("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add a new task..."
        required
      />
      <RadioGroup>
        <RadioLabel>
          <input type="radio" name="category" value="work" required />
          Work
        </RadioLabel>
        <RadioLabel>
          <input type="radio" name="category" value="personal" required />
          Personal
        </RadioLabel>
      </RadioGroup>
      <ProjectSelect
        value={selectedProjectId}
        onChange={(e) => setSelectedProjectId(e.target.value)}
      >
        <option value="">Select a project</option>
        {projects.map((project) => (
          <option key={project.id} value={project.id}>
            {project.name}
          </option>
        ))}
      </ProjectSelect>
      <Input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        placeholder="Due date"
      />
      <Button type="submit">Add Task</Button>
    </Form>
  );
};
