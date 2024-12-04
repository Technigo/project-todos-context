# Project Description
This project provides a To-Do and Project Management application using React, Zustand for state management, and TypeScript for type safety. It is enhanced with localStorage persistence, allowing users to create, update, and delete tasks (To-Dos) and projects, as well as manage their themes (light/dark mode).

# Features
## Manage To-Dos and Projects:

Add, remove, and toggle the completion status of tasks and projects.
View the total number of tasks or projects and the count of completed ones.
## Persistent Storage:

Stores tasks and projects data in the browser's localStorage for persistence across sessions.
## Dark/Light Mode:

Users can toggle between light and dark themes for both the app and individual project/task cards.
## Dynamic Forms:

Users can choose to add either a new To-Do or a new Project using a single form with radio buttons to toggle between them.

# Tech Stack
React: UI library for building the app.

Zustand: A small, fast state management library.

Styled-Components: For styling the components with ease.

localStorage: For storing state persistently in the browser.

TypeScript: Provides static type checking to ensure better developer experience and code quality.

# Improvements
1. Add Time to To-Dos and Projects

To improve the functionality and usability of the app, I plan to implement time tracking for both To-Dos and Projects. Users will be able to set a due date or deadline for each task and project. This feature will help users stay organized and on track with their goals.

2. Edit Text of To-Dos and Projects
Currently, users can only add new tasks or projects. I like to implement an option to edit the text of an existing To-Do or Project. This allows users to correct or update any task or project description as their needs evolve.

Users will be able to click on the task or project text and make edits directly in the UI, similar to how tasks are toggled for completion. A save button will be provided to confirm the changes.
This feature will enhance the flexibility of the application and make it more intuitive for managing tasks and projects that evolve over time.

3. Project Detail Page
To provide more detail and better project management, I will create a dedicated page for each project. This page will allow users to define the project and its tasks more comprehensively, offering the following features:

Define Project Details: Users will be able to set a more detailed description of the project, set specific goals, and track progress.
Add and Track Tasks: Users can add specific tasks to each project, making it easy to break down larger projects into manageable steps.
Mark Tasks as Completed: As tasks within a project are completed, users can mark them off individually. The project page will automatically update to show the completion status of each task.
Progress Tracker: A progress bar or completion percentage will be visible on the project page, helping users track how much of the project has been completed based on task completion.
Each project will be clickable from the main dashboard, which will open the Project Detail Page to allow users to manage and track their projects in-depth.

### View it live
https://gittes-to-do-list-application.netlify.app/