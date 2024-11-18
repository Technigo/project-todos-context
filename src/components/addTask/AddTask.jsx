import { useAppData } from "../../contexts/FormContext"
import { useState} from "react"
import {AddTaskForm} from "./AddTaskForm";
import "./addTask.css";

export const AddTask = () => {

    const { addTask, } = useAppData()
    const [newTask, setNewTask] = useState('')

    const handleSubmitTask = e =>{
        e.preventDefault()
        if(newTask.trim() !== '') {
            addTask(newTask)
            setNewTask('')
        } 
    }

    const handleNewListChange = e =>{
        setNewTask(e.target.value)
    }

   return (
    <div className="add-container">
        <AddTaskForm onFormSubmit={handleSubmitTask} newTodo={newTask} onNewTodoChange={handleNewListChange} />
    </div>
   )
}