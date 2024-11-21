import styled from "styled-components";

const FloatingButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  background-color: #6c63ff; /* Lila färg */
  color: #fff;
  border: none;
  border-radius: 50%;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #5a54e3; /* Lite mörkare lila vid hover */
  }
`;

const AddTodoButton = ({ onClick }) => {
  return <FloatingButton onClick={onClick}>+</FloatingButton>;
};

export default AddTodoButton;
