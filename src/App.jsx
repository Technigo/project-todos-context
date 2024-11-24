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
          : "bg-gradient-to-br from-blue-50 to-white"
      }`}
    >
      <div className="container mx-auto px-4 py-6 sm:py-12 max-w-2xl">
        <div className="flex flex-col items-center gap-6 sm:gap-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <ListTodo
                size={28}
                className="text-indigo-600 dark:text-indigo-400"
              />
              <h1
                className={`text-2xl sm:text-3xl font-bold ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Todo App
              </h1>
            </div>
            <p
              className={`text-sm sm:text-base ${
                isDark ? "text-gray-200" : "text-gray-700"
              }`}
            >
              Stay organized and productive
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-4">
            <TodoFilters />
            <TodoActions />
          </div>

          <TodoInput />

          <TodoStats />

          <div className="w-full space-y-3">
            {todos.length === 0 ? (
              <div className="text-center py-8 sm:py-12">
                <p
                  className={`text-lg sm:text-xl mb-2 ${
                    isDark ? "text-gray-200" : "text-gray-700"
                  }`}
                >
                  No todos yet
                </p>
                <p
                  className={`text-sm sm:text-base ${
                    isDark ? "text-gray-300" : "text-gray-600"
                  }`}
                >
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
