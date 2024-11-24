// counter.jsx

import useTodoStore from "../stores/Store";

function Counter() {
  const todos = useTodoStore((state) => state.todos);
  const uncompletedCount = todos.filter((todo) => !todo.completed).length;

  return <p>Uncompleted tasks: {uncompletedCount}</p>;
}

export default Counter; 
