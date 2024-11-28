<h1 align="center">
  <a href="">
    <img src="./src/assets/banner.svg" alt="Project Banner Image">
  </a>
</h1>

# Todo - useContext Project

The purpose of this project was to create a to-do app using Zustand. The app features a form where users can enter tasks, which are then displayed in a list. The list includes:

- The total count of tasks.
- The count of completed tasks.
- The date each task was added.

Users can mark tasks as completed or remove them entirely.

### The Process and problems

- I started by importing Zustand and creating a store to manage the initial state for the form and the task array. I then built two components:
  TaskForm: Handles the form for adding tasks.
  TaskList: Displays the list of tasks.

- To update form values and modify the tasks array I used the set method.

- To calculate the total number of tasks and the number of completed tasks, I added get methods.

- I included a timestamp for each task to indicate when it was created. The timestamp is stored as a raw JavaScript Date object and then formatted into a string using the toLocaleDateString() method. Since this approach was quite simple, I found it unnecessary to import a third-party library.

- Finally I implemented the toggleTaskCompletion method to toggle tasks between completed and uncompleted states, and the removeTask method to delete tasks by their ID.

- To ensure data persistence (so tasks remain after a page refresh), I wrapped the entire store in Persist.

- Since there wasn’t a predefined design, I found it quite challenging to create a layout. My idea was to style the task list like a notepad. With more time, I would refine the code to make it cleaner and the design more polished.

### View it live

https://fannys-taskbuddy.netlify.app/

## Instructions

<a href="instructions.md">
   See instructions of this project
  </a>
