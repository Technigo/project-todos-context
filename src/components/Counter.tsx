// counter.jsx

import useTodoStore from "../stores/store";
import { Todo } from "../types";

const Counter = () => {
  const todos: Todo[] = useTodoStore((state) => state.todos);
  const uncompletedCount = todos.filter((todo) => !todo.completed).length;

  return <p>Uncompleted tasks: {uncompletedCount}</p>;
};

export default Counter;
