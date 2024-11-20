import useTaskStore from "../stores/taskStore";

const TaskCount = () => {
    const tasks = useTaskStore((state) => state.tasks);
    const completedCount = tasks.filter((task) => task.completed).length;
    const uncompletedCount = tasks.filter((task) => !task.completed).length;

    return (
        <div>
            <p>Completed Tasks: {completedCount}</p>
            <p>Uncompleted Tasks: {uncompletedCount}</p>
        </div>
    );
};

export default TaskCount;
