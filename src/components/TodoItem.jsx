import useTodoStore from "../store/todoStore";
import styled from "styled-components";


const TodoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid ${({ theme }) => (theme.isDarkMode ? "#444" : "#ddd")};
`;

const Checkbox = styled.input.attrs({ type: "checkbox" })`
  width: 20px;
  height: 20px;
  accent-color: #6c63ff; /* Gör checkboxen lila när markerad */
  cursor: pointer;
`;

const TodoText = styled.span`
  flex: 1;
  margin-left: 10px;
  text-decoration: ${({ completed }) => (completed ? "line-through" : "none")};
  color: ${({ theme, completed }) =>
    completed
      ? theme.isDarkMode
        ? "#888"
        : "#aaa"
      : theme.isDarkMode
      ? "#fff"
      : "#333"};
`;

const Button = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => (theme.isDarkMode ? "#ff4d4d" : "#e60000")};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => (theme.isDarkMode ? "#ff9999" : "#ff6666")};
  }
`;


const TodoItem = ({ todo }) => {
  const { toggleTodo, deleteTodo } = useTodoStore();

  return (
    <TodoContainer>
      <Checkbox
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />
      <TodoText completed={todo.completed}>{todo.text}</TodoText>
      <Button onClick={() => deleteTodo(todo.id)}>🗑️</Button>
    </TodoContainer>
  );
};

export default TodoItem;