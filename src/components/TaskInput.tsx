import { useTaskStore, TaskCategory } from "../stores/TaskStore";
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
} from "./dashboard/ui/select.tsx";
import { RadioGroup, RadioGroupItem } from "./dashboard/ui/radio-group";
import { Button } from "./dashboard/ui/button";

const Form = styled.form`
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
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

type TaskInputState = {
  name: string;
  category: "personal" | "work";
  dueDate?: string;
  projectId: number | null;
  timestamp: number;
};

export const TaskInput: React.FC = () => {
  // Local state for form inputs
  const [taskInput, setTaskInput] = useState<TaskInputState>({
    name: "",
    category: "personal" as TaskCategory,
    dueDate: undefined,
    projectId: null,
    timestamp: 0,
  });

  const { addTask } = useTaskStore();
  const { projects } = useProjectStore();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!taskInput.name.trim()) return; // Don't submit empty tasks

    addTask(
      taskInput.name,
      taskInput.category || "personal",
      taskInput.dueDate,
      taskInput.projectId,
      new Date().toISOString()
    );

    // Reset form
    setTaskInput({
      name: "",
      category: "personal" as TaskCategory,
      dueDate: "",
      projectId: null,
      timestamp: 0,
    });
  };

  const addProject = () => {
    console.log("Add Project");
  };

  return (
    <Form onSubmit={handleSubmit} role="form" aria-label="Add new task">
      <Input
        type="text"
        value={taskInput.name}
        onChange={(e) => setTaskInput({ ...taskInput, name: e.target.value })}
        placeholder="Add a new task..."
        required
        aria-label="Task name"
      />
      <RadioGroup
        value={taskInput.category}
        onValueChange={(value: TaskCategory) =>
          setTaskInput({ ...taskInput, category: value })
        }
        aria-label="Task category"
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="work" id="work" type="button" role="radio" />
          <RadioLabel htmlFor="work">Work</RadioLabel>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem
            value="personal"
            id="personal"
            type="button"
            role="radio"
          />
          <RadioLabel htmlFor="personal">Personal</RadioLabel>
        </div>
      </RadioGroup>
      <DatePickerDemo
        value={taskInput.dueDate || new Date().toISOString()}
        onChange={(date: string) =>
          setTaskInput({
            ...taskInput,
            dueDate: date,
          })
        }
      />
      <Select
        value={taskInput.projectId?.toString()}
        onValueChange={(value: string) => {
          if (value === "new") {
            addProject();
            return;
          }
          setTaskInput({
            ...taskInput,
            projectId: value ? Number(value) : null,
          });
        }}
        aria-label="Select project"
      >
        <SelectTrigger aria-label="Select project">
          <SelectValue placeholder="Select a project" />
        </SelectTrigger>
        <SelectContent>
          {projects.map((project) => (
            <SelectItem
              key={project.id}
              value={project.id.toString()}
              aria-label={`Select "${project.name}" project`}
              aria-selected={taskInput.projectId === project.id}
              role="option"
            >
              {project.name}
            </SelectItem>
          ))}
          {/* TODO - create project from this view */}
          {/* <SelectItem key="new" value="new">
            Create New +
          </SelectItem> */}
        </SelectContent>
      </Select>

      <Button
        type="submit"
        aria-label="Add task"
        role="button"
        variant="ghost"
      >
        Add Task
      </Button>
    </Form>
  );
};
