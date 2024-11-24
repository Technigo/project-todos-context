import MyToDoListPage from "./Page/MyToDoListPage";

function App() { // Huvudkomponenten för appen.
  return (
    <div> {/* Ett omslutande `<div>` för att strukturera innehållet på sidan. */}

      <MyToDoListPage /> {/* Visar listan över alla uppgifter med hjälp av TodoList-komponenten. */}

    </div>
  );
}

export default App; // Exporterar App-komponenten så den kan användas i index.js.
