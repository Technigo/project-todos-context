import { useTodoStore } from "../store/useTodoStore";
import { useThemeStore } from "../store/useThemeStore";

export const TodoStats = () => {
  const totalTodos = useTodoStore((state) => state.getTotalTodos());
  const completedTodos = useTodoStore((state) => state.getCompletedTodos());
  const isDark = useThemeStore((state) => state.isDark);

  return (
    <div
      className={`flex gap-4 text-sm ${
        isDark ? "text-gray-400" : "text-gray-600"
      }`}
    >
      <p>Total tasks: {totalTodos}</p>
      <p>Completed: {completedTodos}</p>
      <p>Remaining: {totalTodos - completedTodos}</p>
    </div>
  );
};
