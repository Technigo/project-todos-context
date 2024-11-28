import React from "react";
import { useTheme } from "./context/ThemeContext";
import { GlobalStyle } from "./styles/GlobalStyle.js";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import AddTodoPopup from "./components/AddTodoPopup.jsx";
import AddTodoButton from "./components/AddTodoButton.js";


export const App: React.FC = () => {
  const { isDarkMode } = useTheme();
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);

  

  return (
    <>
      <GlobalStyle theme={{ isDarkMode }} />
      <div>
        <Header theme={{ isDarkMode }} togglePopup={() => setIsPopupOpen(true)} />
        <TodoList />
        {isPopupOpen && <AddTodoPopup onClose={() => setIsPopupOpen(false)} />}
        <AddTodoButton onClick={() => setIsPopupOpen(true)} /> 
      </div>
    </>
  )
};

