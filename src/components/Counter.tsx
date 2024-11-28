// counter.jsx

import useTodoStore from "../stores/store";

const Counter = () => {
  const todos: { id: string; text: string; completed: boolean }[] = useTodoStore((state) => state.todos);
  const uncompletedCount: number = todos.filter((todo) => !todo.completed).length;

  return <p>Uncompleted tasks: {uncompletedCount}</p>;
}

export default Counter; 
