import useTaskStore from "../stores/taskStore";

const TaskItem = ({ task }) => {
    const toggleTask = useTaskStore((state) => state.toggleTask);
    const removeTask = useTaskStore((state) => state.removeTask);

    return (
        <li>
            <label>
                <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTask(task.id)}
                />
                <span
                    style={{
                        textDecoration: task.completed ? "line-through" : "none",
                        color: task.completed ? "gray" : "black",
                    }}
                >
                    {task.title}
                </span>
            </label>
            <button onClick={() => removeTask(task.id)}>Delete</button>
        </li>
    );
};

export default TaskItem; 
