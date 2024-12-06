import { useState } from "react";
import useTodoStore from "../store/todoStore";
import styled from "styled-components";
import { GlobalStyle } from "../styles/GlobalStyle";
import { useTheme } from "../context/ThemeContext";


const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PopupContainer = styled.article`
  /* background-color: ${({ theme }) => (theme.isDarkMode ? "#2b2b2b" : "#fff")}; */
  padding: 20px;
  width: 400px;
  border-radius: 12px;
  border: 1px solid
    ${({ theme }: { theme: { isDarkMode: boolean } }) =>
      theme.isDarkMode ? "#444" : "#ddd"};
  text-align: center;
`;

const Title = styled.h2`
  margin: 0;
  margin-bottom: 20px;
  font-size: 18px;
  /* color: ${({ theme }) => (theme.isDarkMode ? "#fff" : "#333")}; */
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #6c63ff;
  border-radius: 6px;
  font-size: 16px;
  outline: none;
  color: ${({ theme }) => (theme.isDarkMode ? "#fff" : "#333")};
  background-color: ${({ theme }) =>
    theme.isDarkMode ? "#444" : "#f9f9f9"};

  &::placeholder {
    color: #b2b2b2;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CancelButton = styled.button`
  background: none;
  border: 2px solid #6c63ff;
  color: #6c63ff;
  border-radius: 6px;
  padding: 10px 20px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: rgba(108, 99, 255, 0.1);
  }
`;

const ApplyButton = styled.button`
  background-color: #6c63ff;
  border: none;
  color: #fff;
  border-radius: 6px;
  padding: 10px 20px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: #5a54e3;
  }
`;


interface AddTodoPopupProps {
  onClose: () => void; 
}

const AddTodoPopup: React.FC<AddTodoPopupProps> = ({ onClose }) => {
  const [text, setText] = useState<string>("");
  const addTodo = useTodoStore((state) => state.addTodo);
  const { isDarkMode } = useTheme();

  const handleSubmit = () => {
    if (text.trim().length === 0) return;
    addTodo(text); 
    setText(""); 
    onClose(); 
  };

  return (
    
    <Overlay>
      <GlobalStyle theme={{ isDarkMode }} />
    <PopupContainer>
      <Title>Add a new todo</Title>
      <Input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <ButtonGroup>
        <ApplyButton onClick={handleSubmit}>Add</ApplyButton>
        <CancelButton onClick={onClose}>Close</CancelButton>
      </ButtonGroup>
    </PopupContainer>
    </Overlay>
  );
};

export default AddTodoPopup;
