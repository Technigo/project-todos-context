import React from "react";
import TaskItem from "./TaskItem";

function TaskList({ tasks = [] }) { // Default para evitar errores si tasks es undefined
    if (!Array.isArray(tasks)) {
        console.error("The tasks prop is not an array:", tasks);
        return <p>Invalid tasks data!</p>;
    }

    return (
        <div>
            {tasks.length === 0 ? (
                <p>No tasks available!</p>
            ) : (
                tasks.map((task) => <TaskItem key={task.id} task={task} />)
            )}
        </div>
    );
}

export default TaskList;
