<h1 align="center">
  <a href="">
    <img src="./src/assets/banner.svg" alt="Project Banner Image">
  </a>
</h1>

# Todo - useContext Project

This project is a to-do application that uses Zustand for global state management. The app allows users to manage their tasks by adding, toggling completion, and removing tasks, while maintaining a clean and responsive design.

### The Problem

For this project, I approached the problem by starting with the basic requirements: listing tasks, toggling their completion, and adding/removing tasks. I planned the project by sketching out the app's structure and breaking the UI into smaller reusable components.

#### Tools and Technologies:
Zustand: To manage the global state of tasks and their completion status.
React: For creating components and handling user interactions.
CSS: For styling and making the app responsive across devices.
Local Storage: To persist tasks between page reloads.
#### My Process:

Planning:

I started by designing the app structure, identifying components like the task list, task input, and task counter.
I defined the data model for a task to include properties like text, remove and completed.

Implementation:

I built the Zustand store to handle the global state for tasks and added actions like addTask, removeTask, and toggleTaskCompletion.
I created a responsive UI using CSS to ensure it looks great on devices ranging from 320px to 1600px in width.
Local Storage was implemented to save and retrieve tasks so users don't lose their data on page reload.

Accessibility:

I followed accessibility guidelines, and my Lighthouse score was at least 95%, but I didnt get a 100% since I really liked my pink color for the header and footer.

Custom Features:

Added a custom checkbox style for better UI experience.
Implemented an empty state image for when no tasks are present.

#### Next Steps:

If I had more time, I would:

Add timestamps for tasks to show when they were created.
Implement a "complete all" button.
Add a dark mode toggle.
Introduce filtering options to display completed/uncompleted tasks or tasks by categories.
Enable due dates for tasks with visual indicators for overdue ones.

### View it live

https://happy-to-do.netlify.app/

## Instructions

<a href="instructions.md">
   See instructions of this project
  </a>
