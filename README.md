# React To-Do List Assignment

A beginner-friendly React To-Do List application demonstrating:

- React components
- `useState` for state management
- State changes with `setTodos`
- Props for passing data and callback functions
- Adding todo items
- Deleting todo items
- Marking todo items as completed
- Component-based project structure

## Requirements

Install Node.js before running the project.

## How to Run

Open this folder in VS Code and run:

```powershell
npm install
npm run dev
```

Vite will display a local URL such as:

```text
http://localhost:5173/
```

Open that URL in your browser.

## Components

- `App.jsx` - owns the todo state and passes props.
- `TodoForm.jsx` - receives `onAddTodo` as a prop.
- `TodoList.jsx` - receives the todo array and callback props.
- `TodoItem.jsx` - receives one todo and action callbacks.

## Assignment Concepts

### State
The `todos` state is managed in `App.jsx` using React's `useState`.

### Props
Functions and todo data are passed from parent components to child components using props.

### State Changes
The application uses immutable updates with `map`, `filter`, and the spread operator.

## Note

This project intentionally does not include `node_modules`. Run `npm install` after extracting the ZIP file.
