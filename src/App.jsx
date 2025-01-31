import useTodoStore from './components/store';
import TaskList from './components/TaskList';
import TaskInput from './components/TaskInput';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 400px;
  margin: 40px auto;
  padding: 16px;
  background: #fff5f5;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  color: #000;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: #ff4f4f;
  text-align: center;
  margin-bottom: 16px;
`;

const TaskCount = styled.p`
  margin-top: 16px;
  color: #666;
  text-align: center;
`;

function TodoApp() {
  const { tasks, addTask, toggleTask, removeTask } = useTodoStore();

  return (
    <Container>
      <Title>To-Do List</Title>
      <TaskInput addTask={addTask} />
      <TaskList tasks={tasks} toggleTask={toggleTask} removeTask={removeTask} />
      <TaskCount>Total Tasks: {tasks.length}</TaskCount>
    </Container>
  );
}

export default TodoApp;
