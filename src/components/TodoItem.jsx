function TodoItem({ todo, onDelete, onToggle }) {
  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <label>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
        <span>{todo.text}</span>
      </label>

      <button
        className="delete-button"
        onClick={() => onDelete(todo.id)}
        type="button"
      >
        Delete
      </button>
    </li>
  )
}

export default TodoItem
