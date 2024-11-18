<h1 align="center">
  <a href="">
    <img src="./src/assets/banner.svg" alt="Project Banner Image">
  </a>
</h1>

# Todo - useContext Project

This project is a to-do app implemented in React, where the useContext hook is utilized to manage global state and efficiently pass data down to deeply nested components.

## Getting Started with the Project

### Dependency Installation & Startup Development Server

Once cloned, navigate to the project's root directory and this project uses npm (Node Package Manager) to manage its dependencies.

The command below is a combination of installing dependencies, opening up the project on VS Code and it will run a development server on your terminal.

```bash
npm i && code . && npm run dev
```

### The Problem

I began by setting up the React project and integrating React Router for navigation. Using a precise style from Dribbble, I created components for the UI. For state management, I used useState for local state and useContext for global state, fetching data from a mock API using useEffect. I handled empty states, loading states, and 404 errors to ensure a seamless user experience.

If I had more time, I would add new features like calendars and date/time pickers to enhance the functionality of the app and implement user authentication to allow users to have personalized to-do lists. I would also integrate a backend to store tasks on a server.

### View it live

[[Netlify link](https://tasktide-app.netlify.app/)]

## Instructions

<a href="instructions.md">
   See instructions of this project
  </a>
