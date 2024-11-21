import { useTaskStore } from "../stores/TaskStore";
import { useProjectStore } from "../stores/ProjectStore";
import { useState } from "react";
import { DatePickerDemo } from "./dashboard/DatePicker";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  flex: 1;
  font-size: 1rem;
  transition: border-color 0.2s ease;
  background: white;

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
  border-radius: 12px;
  background: white;
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
  border-radius: 24px;
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
  border-radius: 12px;
  flex: 1;
  background: white;
`;

export const TaskInput = () => {
  // Local state for form inputs
  const [taskInput, setTaskInput] = useState({
    name: "",
    category: "personal",
    dueDate: "",
    projectId: "",
  });

  const { addTask } = useTaskStore();
  const { projects } = useProjectStore();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!taskInput.name.trim()) return; // Don't submit empty tasks

    addTask(
      taskInput.name,
      taskInput.category,
      taskInput.dueDate,
      taskInput.projectId,
      Date.now() // timestamp
    );

    // Reset form
    setTaskInput({
      name: "",
      category: "personal",
      dueDate: "",
      projectId: "",
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={taskInput.name}
        onChange={(e) => setTaskInput({ ...taskInput, name: e.target.value })}
        placeholder="Add a new task..."
        required
      />

      <RadioGroup>
        <RadioLabel>
          <input
            type="radio"
            name="category"
            value="work"
            checked={taskInput.category === "work"}
            onChange={(e) =>
              setTaskInput({ ...taskInput, category: e.target.value })
            }
          />
          Work
        </RadioLabel>
        <RadioLabel>
          <input
            type="radio"
            name="category"
            value="personal"
            checked={taskInput.category === "personal"}
            onChange={(e) =>
              setTaskInput({ ...taskInput, category: e.target.value })
            }
          />
          Personal
        </RadioLabel>
      </RadioGroup>
      <DatePickerDemo
        value={taskInput.dueDate}
        onChange={(e) =>
          setTaskInput({ ...taskInput, dueDate: e.target.value })
        }
      />

      <ProjectSelect
        value={taskInput.projectId}
        onChange={(e) =>
          setTaskInput({ ...taskInput, projectId: e.target.value })
        }
      >
        <option value="">Select a project</option>
        {projects.map((project) => (
          <option key={project.id} value={project.id}>
            {project.name}
          </option>
        ))}
      </ProjectSelect>

      <Button type="submit">Add Task</Button>
    </Form>
  );
};
