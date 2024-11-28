import styled from "styled-components";

const AddTodoButtonStyle = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 30%;
  background-color: #04257c;
  border: 0;
  border-radius: 20px;
  color: whitesmoke;
  border: solid white 3px;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #0635a4;
    color: #ffffff;
    border-color: #a3c9f1;
  }
`

export const AddTodoButton = () => {
    return (
        <AddTodoButtonStyle>
            Add
        </AddTodoButtonStyle>
    )
}