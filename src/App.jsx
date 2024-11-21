import React from "react";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import { GlobalStyle } from "./styles/GlobalStyle";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import AddTodoPopup from "./components/AddTodoPopup";
import AddTodoButton from "./components/AddTodoButton"
import useTodoStore from "./store/todoStore";


export const App = () => {
  const { isDarkMode } = useTheme();
  const todos = useTodoStore((state) => state.todos);
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);

  console.log("isDarkMode in App:", isDarkMode);

  return (
    <ThemeProvider>
      <GlobalStyle theme={{ isDarkMode }} />
      <div>
        <Header togglePopup={() => setIsPopupOpen(true)} />
        <TodoList />
        {isPopupOpen && <AddTodoPopup onClose={() => setIsPopupOpen(false)} />}
        <AddTodoButton onClick={() => setIsPopupOpen(true)} /> 
      </div>
    </ThemeProvider>
  )
};
