import styled from 'styled-components';
import React from 'react';

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

interface TaskListProps {
  tasks: Task[];
  toggleTask: (id: number) => void;
  removeTask: (id: number) => void;
}

const List = styled.ul`
  margin-top: 16px;
  list-style: none;
  padding: 0;
  background: #fffbf5;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  border-bottom: 1px solid #f4dcdc;
  font-size: 16px;
  color: #ff7f7f;
  transition: background 0.2s ease-in-out;

  &:hover {
    background: #ffeeee;
  }
`;

const TaskLabel = styled.label<{ completed: boolean }>`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  font-size: 16px;
  color: ${(props) => (props.completed ? '#bbb' : '#ff7f7f')};
  text-decoration: ${(props) => (props.completed ? 'line-through' : 'none')};
  transition: color 0.3s ease-in-out;
`;

const TaskCheckbox = styled.input`
  margin-right: 10px;
  transform: scale(1.3);
  accent-color: #ff7f7f;
  cursor: pointer;
`;

const RemoveButton = styled.button`
  background: none;
  border: none;
  color: #ff4f4f;
  cursor: pointer;
  font-size: 18px;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`;

function TaskList({ tasks, toggleTask, removeTask }: TaskListProps) {
  return (
    <List>
      {tasks.map((task) => (
        <ListItem key={task.id}>
          <TaskLabel completed={task.completed}>
            <TaskCheckbox
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
              aria-label={`Mark ${task.text} as ${task.completed ? 'incomplete' : 'complete'}`}
            />
            {task.text}
          </TaskLabel>
          <RemoveButton onClick={() => removeTask(task.id)}>❌</RemoveButton>
        </ListItem>
      ))}
    </List>
  );
}

export default TaskList;
