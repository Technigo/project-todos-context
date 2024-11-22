import { ListTodo } from "lucide-react";
import { TodoInput } from "./components/ToDoInput";
import { TodoItem } from "./components/ToDoItem";
import { TodoStats } from "./components/ToDoStats";
import { TodoFilters } from "./components/ToDoFilters";
import { TodoActions } from "./components/ToDoActions";
import { useTodoStore } from "./store/useTodoStore";
import { useThemeStore } from "./store/useThemeStore";

export const App = () => {
  const todos = useTodoStore((state) => state.getFilteredTodos());
  const isDark = useThemeStore((state) => state.isDark);

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDark
          ? "bg-gradient-to-br from-gray-900 to-gray-800"
          : "bg-gradient-to-br from-gray-100 to-white"
      }`}
    >
      <div className="container mx-auto px-4 py-12 max-w-2xl">
        <div className="flex flex-col items-center gap-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <ListTodo size={32} className="text-indigo-500" />
              <h1
                className={`text-3xl font-bold ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                TaskTidy
              </h1>
            </div>
            <p className={isDark ? "text-gray-400" : "text-gray-600"}>
              Stay organized and productive
            </p>
          </div>

          <div className="flex items-center justify-between w-full">
            <TodoFilters />
            <TodoActions />
          </div>

          <TodoInput />

          <TodoStats />

          <div className="w-full space-y-3">
            {todos.length === 0 ? (
              <div className="text-center py-12">
                <p
                  className={`text-xl mb-2 ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  No todos yet
                </p>
                <p className={isDark ? "text-gray-500" : "text-gray-400"}>
                  Add a new task above to get started
                </p>
              </div>
            ) : (
              todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
