<h1 align="center">
  <a href="">
    <img src="./src/assets/banner.svg" alt="Project Banner Image">
  </a>
</h1>

# Todo - useContext Project

The assignment is to build a Todo app using Zustand for state management.

In this project, I aimed to explore Styled Components and refresh my newly acquired skills in using React Router.

### Dependency Installation & Startup Development Server

This project uses npm (Node Package Manager) to handle its dependencies and run the development server.

```bash
npm i && code . && npm run dev
```
Before deployment:

```bash
npm run build
```

Install Zustand: 

```bash
npm i zustand
```

Install Styled components: 

```bash
npm install styled-components
```

Install Routes: 

```bash
npm install react-router-dom
```

Font Awesome:  
```bash
npm install --save @fortawesome/fontawesome-svg-core  
npm install --save @fortawesome/free-solid-svg-icons  
npm install --save @fortawesome/react-fontawesome  
```  

### Useful resources

- [This CodePen](https://codepen.io/joheri1/pen/MWNdRNX) originally created by [DesignCouch](https://codepen.io/designcouch), has been adjusted slightly to improve accessibility.    
- [One of my previous projects:](https://github.com/joheri1/project-movies-vite) A movie browsing app built with React Router, showcasing dynamic routing and API integration.

### The Problem  
- Understanding how to effectively use Zustand. My initial goal was to expand the app with multiple pages to fully leverage global state management, but as always, time was a challenge.   
- Adding accessible labels to input fields when using Styled Components turned out to be trickier than I thought, since I don't want to display the text. I couldn't find a good solution within the time frame.  
- Removing import React in the Checklist file caused a cascade of errors, so as a quick workaround before my demo, I decided to leave it where it was needed to avoid breaking the app.   

### If I had more time
## Stretch Goals
- Add a timestamp for each task indicating when it was created. The timestamp should be displayed as a formatted date but stored as a raw date. You can use a third-party library, such as date-fns or Moment.js for this.
- Add a complete all button to set all tasks as completed. You could also use this opportunity to make your app look nice when there's no data. See empty states UX design for some ideas.
- Add a button to switch dark/light mode.
- Implement local storage
## Advanced Stretch Goals
- Add a date input to your new task form to set a due date on a task. It could be required, or optional - it's up to you. You could then display this in the list and style it differently when a task is overdue.
- Add filters to display completed/uncompleted tasks, tasks created after a given date or anything else you consider important.
- Create categories/tags for tasks so they can be grouped - for example, 'Housework', 'Shopping', etc.
- Create projects for tasks → A project could be a group of tasks which all need to be completed and when they are completed, the project is marked as complete.

### View it live

[Johannas Checklists](https://johannas-checklists.netlify.app/)

## Instructions

<a href="instructions.md">
   See instructions of this project
  </a>
