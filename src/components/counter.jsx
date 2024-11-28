// counter.jsx

import useTodoStore from "../stores/store";

const Counter = () => {
  const todos = useTodoStore((state) => state.todos);
  const uncompletedCount = todos.filter((todo) => !todo.completed).length;

  return <p>Uncompleted tasks: {uncompletedCount}</p>;
}

export default Counter; 
