import styled from 'styled-components';

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
  padding: 8px;
  border-bottom: 1px solid #f4dcdc;
  font-size: 16px;
  color: #ff7f7f;
`;

const TaskCheckbox = styled.input`
  margin-right: 10px;
  transform: scale(1.3);
  accent-color: #ff7f7f;
`;

const RemoveButton = styled.button`
  background: none;
  border: none;
  color: #ff4f4f;
  cursor: pointer;
  font-size: 16px;
`;

function TaskList({ tasks, toggleTask, removeTask }) {
  return (
    <List>
      {tasks.map((task) => (
        <ListItem key={task.id}>
          <label>
            <TaskCheckbox
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
            />
            {task.text}
          </label>
          <RemoveButton onClick={() => removeTask(task.id)}>❌</RemoveButton>
        </ListItem>
      ))}
    </List>
  );
}

export default TaskList;