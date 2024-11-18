export const AddTaskForm = ({onFormSubmit, newTodo, onNewTodoChange}) => {
    return(
        <form onSubmit={onFormSubmit} 
        className="add-task-container"
        aria-label="add new task"
        >
            <input
            type="text"
            value={newTodo}
            onChange={onNewTodoChange}
            name="todo"
            id="todo-input"
            className="add-input"
            placeholder="What do you need to do?"
            />
            <button type="submit" className="addBtn" aria-label="remove task">➕ Add</button>
        </form>
    )
}