import React from "react";
import { useTheme } from "./context/ThemeContext";
import { GlobalStyle } from "./styles/GlobalStyle";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import AddTodoPopup from "./components/AddTodoPopup";
import AddTodoButton from "./components/AddTodoButton";




export const App: React.FC = () => {
  const { isDarkMode } = useTheme();
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);

  

  return (
    <>
      <GlobalStyle theme={{ isDarkMode }} />
      <section>
        <Header theme={{ isDarkMode }} togglePopup={() => setIsPopupOpen(true)} />
        <TodoList />
        {isPopupOpen && <AddTodoPopup onClose={() => setIsPopupOpen(false)} />}
        <AddTodoButton onClick={() => setIsPopupOpen(true)} /> 
      </section>
    </>
  )
};

