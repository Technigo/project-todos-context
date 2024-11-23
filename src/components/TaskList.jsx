//Lists all tasks.//

import React from "react";
import { useTodoStore } from "../store/todoStore";
import { TaskItem } from "./TaskItem";

export const TaskList = () => {
    const todos = useTodoStore((state) => state.todos);

    return (
        <ul className="task-list">
            {todos.map((todo) => (
                <TaskItem key={todo.id} todo={todo} />
            ))}
        </ul>
    );
};
