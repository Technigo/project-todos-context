import { useTaskStore } from "../stores/TaskStore";
import styled from "styled-components";

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

const Select = styled.select`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
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

export const TaskInput = () => {
  const { setNewTask, addTask, newTask, dueDate, setDueDate } = useTaskStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const category = formData.get("category");

    addTask(newTask, category, dueDate); // Pass both the task name and category
    setNewTask("");
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
      <Select name="category" required>
        <option value="">Select category</option>
        <option value="work">Work</option>
        <option value="personal">Personal</option>
      </Select>
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
