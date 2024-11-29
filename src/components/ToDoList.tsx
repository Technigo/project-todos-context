import styled from "styled-components";
import useTodoStore from "../stores/store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Todo } from "../types";




const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 20px auto;
  max-width: 600px;
  color: black;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f9f9f9;
  padding: 10px 15px;
  margin-bottom: 10px;
  border-radius: 10px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
`;

const Label = styled.label<{ $completed: boolean }>`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  text-decoration: ${(props) => (props.$completed ? "line-through" : "none")};
  color: ${(props) => (props.$completed ? "#000000" : "#010101")};
`;

const Checkbox = styled.input`
  cursor: pointer;
`;

const RemoveIcon = styled(FontAwesomeIcon)`
  color: black;
  font-size: 18px;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #d9363e;
  }
`;



const ToDoList = () => {
  const todos: Todo[] = useTodoStore((state) => state.todos);
  const toggleTodo: (id: string) => void = useTodoStore((state) => state.toggleTodo);
  const removeTodo: (id: string) => void = useTodoStore((state) => state.removeTodo);

  return (
    <List>
      {todos.map((todo) => (
        <ListItem key={todo.id}>
          <Label $completed={todo.completed}>
            <Checkbox
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            {todo.text}
          </Label>
          <RemoveIcon
            icon={faTrash}
            onClick={() => removeTodo(todo.id)}
          />
        </ListItem>
      ))}
    </List>
  );
}

export default ToDoList;
