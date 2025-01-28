import useTodoStore from "../store/useTodoStore";

const CompleteAllButton = () => {
  const tasks = useTodoStore((state) => state.tasks);
  const completeAll = useTodoStore((state) => state.completeAll);

  const allCompleted =
    tasks.length > 0 && tasks.every((task) => task.completed);

  if (tasks.length === 0) return null; // Hide button if no tasks

  return (
    <button
      onClick={completeAll}
      disabled={allCompleted} //Disabled if all tasks are already completed.
      aria-disabled={allCompleted}
      className="complete-all-button"
    >
      {/* Conditional Rendering: Hides the button if there are no tasks. */}
      {allCompleted ? "All Tasks Completed" : "Complete All"}
    </button>
  );
};

export default CompleteAllButton;
