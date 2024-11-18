import { MainPage } from "./components/main/MainPage";
import { AppDataProvider } from "./contexts/FormContext";

export const App = () => {
  return (
    <>
      <AppDataProvider>
          <MainPage />
      </AppDataProvider>
    </>
  );
};