import useTaskStore from "../stores/taskStore";
import TaskItem from "./TaskItem";

const TaskList = () => {
    const tasks = useTaskStore((state) => state.tasks) || [];

    return (
        <ul>
            {tasks.map((task) => (
                <TaskItem key={task.id} task={task} />
            ))}
        </ul>
    );
};

export default TaskList;
