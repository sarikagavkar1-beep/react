import TodoItem from './TodoItem'

function TodoList({ todos, onDeleteTodo, onToggleTodo }) {
  if (todos.length === 0) {
    return <p className="empty">No tasks yet. Add your first todo!</p>
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={onDeleteTodo}
          onToggle={onToggleTodo}
        />
      ))}
    </ul>
  )
}

export default TodoList
