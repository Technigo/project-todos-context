import React from "react";
import styled from "styled-components";
import useTodoStore from "../stores/Store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";


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

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
  color: ${(props) => (props.completed ? "#000000" : "#010101")};
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

function TodoList() {
  const todos = useTodoStore((state) => state.todos);
  const toggleTodo = useTodoStore((state) => state.toggleTodo);
  const removeTodo = useTodoStore((state) => state.removeTodo);

  return (
    <List>
      {todos.map((todo) => (
        <ListItem key={todo.id}>
          <Label completed={todo.completed}>
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

export default TodoList;
