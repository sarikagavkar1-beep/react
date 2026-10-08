import { useState } from 'react'

function TodoForm({ onAddTodo }) {
  const [text, setText] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    const trimmedText = text.trim()
    if (!trimmedText) return

    onAddTodo(trimmedText)
    setText('')
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
        placeholder="Enter a new task..."
        aria-label="New todo"
      />
      <button type="submit">Add Todo</button>
    </form>
  )
}

export default TodoForm
