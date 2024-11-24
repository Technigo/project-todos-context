# Instructions
In this week's project, it's time to flex your muscles and build a to-do app that uses Zustand for Global State management.

## Getting started 🤓
In your to-do app, you should be able to add tasks, list tasks, and toggle whether a task is done or not. You're free to style your to-do app however you'd like but try to keep it simple and clean — remember, prospective employers will probably be interested in seeing this project!


### Hints and tips to complete the project
As always, start by sketching out how your app will look and what components you'll need. Break down the UI into smaller components. Once you have your sketch, think about how the data in your store should look. What data does a task contain? Sketch it out and get it clear in your head. You'll need React for building components.

When writing your code, try working on the project in small chunks rather than taking on too much at once. For example, you could start by making a new store for your tasks and use a hardcoded list of tasks to get up and running with.

Once you have your to-dos listed, a good next step is to implement some form of `addTask` function and a form to add a new task to the array of hardcoded tasks.

Another challenge is giving your checkboxes a custom look. Feel free to check out [this video about custom checkboxes](https://www.youtube.com/watch?v=NfW_5Y1RZQ4) and [this video about custom radio buttons](https://www.youtube.com/watch?v=BT7FZooiqWw) to boost your knowledge!

## Requirements
- Your app should list all tasks - completed or uncompleted.
- You should be able to mark an uncompleted task as complete (and change it back to uncompleted).
- You should be able to add and remove tasks.
- Your app should show a count of the tasks. Either all tasks or all uncompleted tasks (or both).
- Make your app responsive (it should look good on devices from 320px width up to 1600px)
- Your project should be following accessibility guidelines to ensure your website is usable by a diverse range of users:
  - You should have a score of at least 95 in Lighthouse
  - All images should have alt attributes and proper sizes
  - All contrasts should be OK
- Follow the guidelines on how to write clean code

## Stretch Goals

### Intermediate Stretch Goals

- Add a timestamp for each task indicating when it was created. The timestamp should be displayed as a formatted date but stored as a raw date. You can use a third-party library, such as date-fns or Moment.js for this.
- Add a **complete all** button to set all tasks as completed. You could also use this opportunity to make your app look nice when there's no data. See [empty states UX design](https://www.toptal.com/designers/ux/empty-state-ux-design) for some ideas.
- Add a button to switch dark/light mode.
- Implement local storage

### Advanced Stretch Goals

- Add a date input to your new task form to set a due date on a task. It could be required, or optional - it's up to you. You could then display this in the list and style it differently when a task is overdue.
- Add filters to display completed/uncompleted tasks, tasks created after a given date or anything else you consider important.
- Create categories/tags for tasks so they can be grouped - for example, 'Housework', 'Shopping', etc.
- Create projects for tasks → A project could be a group of tasks which all need to be completed and when they are completed, the project is marked as complete.
