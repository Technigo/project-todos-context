import { useContext, createContext, useState } from "react";

const AppDataContext = createContext();

export const AppDataProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const appContent = {
    heading: "Eggcellent Todo"
  };

  return (
    <AppDataContext.Provider value={{ theme, setTheme, appContent }}>
      {children}
    </AppDataContext.Provider>
  );
};

export const useAppData = () => useContext(AppDataContext);
