import { useTaskStore } from "../stores/TaskStore";
import { useProjectStore } from "../stores/ProjectStore";
import { useState } from "react";
import { DatePickerDemo } from "./dashboard/DatePicker";
import styled from "styled-components";
import { Input } from "./dashboard/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./dashboard/ui/select";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/dashboard/ui/radio-group";
import { Button } from "./dashboard/ui/button";

const Form = styled.form`
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.75rem;
    
    > * {
      width: 100%;
    }
    
    button {
      width: 100%;
    }
  }
`;

const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  cursor: pointer;
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

  const addProject = () => {
    console.log("Add Project");
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
      <RadioGroup 
        value={taskInput.category}
        onValueChange={(value) => setTaskInput({ ...taskInput, category: value })}
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="work" id="work" />
          <RadioLabel htmlFor="work">Work</RadioLabel>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="personal" id="personal" />
          <RadioLabel htmlFor="personal">Personal</RadioLabel>
        </div>
      </RadioGroup>
      <DatePickerDemo
        value={taskInput.dueDate || new Date()}
        onChange={(date) => setTaskInput({ ...taskInput, dueDate: date })}
      />
      <Select
        value={taskInput.projectId?.toString()}
        onValueChange={(value) => {
          if (value === "new") {
            addProject();
            return;
          }
          setTaskInput({ 
            ...taskInput, 
            projectId: value ? Number(value) : null
          });
        }}
      >
        <SelectTrigger>
          <SelectValue placeholder="Select a project" />
        </SelectTrigger>
        <SelectContent>
          {projects.map((project) => (
            <SelectItem key={project.id} value={project.id.toString()}>
              {project.name}
            </SelectItem>
          ))}
          <SelectItem key="new" value="new">
            Create New +
          </SelectItem>
        </SelectContent>
      </Select>

      <Button type="submit">Add Task</Button>
    </Form>
  );
};
