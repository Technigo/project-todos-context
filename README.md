<h1 align="center">
  <a href="">
    <img src="./src/assets/banner.svg" alt="Project Banner Image">
  </a>
</h1>

# Todo - useContext Project

This project is a dynamic to-do list where users can add, manage, and organize tasks by categories. It features light/dark mode, task progress tracking, and local storage to persist tasks.

### The Problem

I began by exploring different To-Do apps to gather inspiration and reflect on what I personally look for in a task management tool. Using Figma, I sketched wireframes to ensure responsive layouts for mobile, tablet, and desktop views.

My initial focus was on designing a light/dark mode toggle, which led me to create a custom Tailwind CSS configuration for the color scheme. To keep things simple, I started with a basic task list and form. As I added more features, the codebase especially the TaskList component, started becoming cluttered. To address this, I refactored some functionality into smaller, more manageable components. For example, I created a dedicated component to display a message and image when all tasks are completed and another for the button that triggers this feature.

I was also inspired by my in-laws, who sometimes struggle with English, as well as an example I came across earlier this week, to add a language toggle feature for improved accessibility.

If I had more time, I would love to implement task editing functionality. Adding drag-and-drop reordering for tasks, including category changes, is another feature I’d prioritize. I’d also like to introduce project-based task grouping, as well as filtering and sorting options for better organization.

### View it live

https://hello-productivity.netlify.app/
