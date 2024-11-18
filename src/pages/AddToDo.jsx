import { useToDos } from "../contexts/ToDoContext";
import { useState } from "react";
import { Link } from "react-router-dom";

import moment from "moment";

import "./AddToDo.css";

export const AddToDo = () => {
  //variables to store text for task, selected date and category
  const [text, setText] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  //access functionality for adding tasks from ToDoContext
  const { addToDo, categories } = useToDos();

  // Get today's date
  const today = new Date().toISOString().split("T")[0];

  const submitHandler = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    //format the date using moment.js
    const formattedDate = moment(date).format("MMM Do, YY");

    //resets state of all input fields after submission
    addToDo(text, formattedDate, category);
    setText("");
    setDate("");
    setCategory("");
  };

  return (
    <section className="add-section">
      <div className="add-title">
        <Link to="/" className="todo-link">
          <h2>x</h2>
        </Link>
        <h2>New Task</h2>
      </div>
      <div className="add-container">
        <form onSubmit={submitHandler} className="add-form">
          <label htmlFor="task">What are you planning?</label>
          <textarea
            id="task"
            name="task"
            rows="5"
            cols="40"
            value={text}
            placeholder="Add a new task"
            onChange={(e) => {
              setText(e.target.value);
            }}
            required
          />
          <div className="add-date">
            <label htmlFor="date">⏰ Deadline</label>
            <input
              id="date"
              type="date"
              value={date}
              min={today}
              onChange={(e) => {
                setDate(e.target.value);
              }}
              required
            />
          </div>
          <div className="add-category">
            <label htmlFor="category">📌 Category</label>
            {/* Use categories array to generate options for select dropdown */}
            <select
              name="category"
              id="category"
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
              required
            >
              <option value="">Select a category</option>
              {categories.map((category) => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>
          </div>
          <button type="submit" className="add-btn">
            Create
          </button>
        </form>
      </div>
    </section>
  );
};
