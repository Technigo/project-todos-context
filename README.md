# Project Description
This project is a task management application built with React and Zustand. It includes two main sections: a Project Tracker and a To-Do List, allowing users to add, remove, and toggle tasks as completed. The state of both sections is managed using Zustand.

# Features
## Projects Section:
Add new projects with unique IDs.

Remove projects by ID.

Toggle project completion status.

Display a list of projects, with the ability to mark each as completed.
## To-Do Section:

Add new tasks.

Remove tasks by ID.

Toggle task completion status.

Option to show or hide the task creation form.

Persistence via localStorage to retain tasks between sessions.

# Tech Stack
React: The user interface is built with React, providing a component-based architecture for rendering the project and task lists.

Zustand: Zustand is used for global state management. The state is split into two stores (useProjectStore and useToDoStore), enabling the management of projects and tasks separately.

useProjectStore manages projects.

useToDoStore manages to-do items and includes persistence using the Zustand middleware persist.

CSS: Custom styles for layout and design, including separate styles for Project and To-Do Cards (ProjectCard.css, ToDoCard.css).

localStorage: For the To-Do section, tasks are saved to local storage, ensuring they persist even after a page refresh.

# Improvements
To further enhance this project, there are several areas that I would like to work on:

## Improve UI Structure:

Currently, the submit button for adding tasks is placed within the content area. To improve user experience and accessibility, it would be better to move the button to the header or at least position it at the top of each section. This way, users can easily access the action to add new projects or tasks without scrolling down.

## Add Deadlines to Projects and To-Dos:
A valuable feature would be the ability to set a deadline for each project or to-do item. This can be achieved by adding a date picker or calendar UI to allow users to select a deadline when adding a new project or task. The deadline could then be displayed alongside the task, and the system could even include a way to visually indicate overdue tasks for better management.

## Add Project Tasks with Checkboxes:
Currently, the project list only tracks a simple project title with a completion status. To improve task tracking within projects, it would be useful to allow users to add sub-tasks or tasks under each project. These tasks would have individual checkboxes for marking completion. This way, users could break down larger projects into smaller, manageable tasks, providing more granular control over project progress.

## Task Prioritization and Sorting:
Adding priority levels (e.g., High, Medium, Low) to both projects and to-dos would help users prioritize their tasks. Additionally, introducing sorting functionality (by deadline, priority, or completion status) would make it easier to organize tasks and projects based on user preferences.

## Notifications or Alerts:
Integrating notifications for approaching deadlines or overdue tasks would further improve the app's utility. This can be implemented either via browser notifications or by highlighting overdue tasks in the UI to ensure users don't miss important deadlines.

### View it live
https://gittes-to-do-list-application.netlify.app/