import { ToDoProvider } from "./contexts/ToDoContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AddToDo } from "./pages/AddToDo";
import { ListToDo } from "./pages/ListToDo";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

import "./App.css";

export const App = () => {
  return (
    <section className="app-container">
      <ToDoProvider>
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ListToDo />} />
            <Route path="/addtodo" element={<AddToDo />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </ToDoProvider>
    </section>
  );
};
