import React from 'react'

const TodoDetailView = ({ todo, show, toggleCompleteTodo, removeTodo }) => (
  <div
    className="todo-detail-view p-1"
    style={{
      maxHeight: show ? '300px' : '0px',
      height: show ? 'auto' : '0px',
      overflow: 'hidden'
    }}
  >
    <p className="card-text">{todo.body}</p>
    <a
      className="btn btn-outline-info btn-sm mr-3 todo__complete-button"
      onClick={() => toggleCompleteTodo(todo)}
      href="#"
      style={{
        fontSize: '14px',
        height: '31px',
        width: '29px'
      }}
    >
      { todo.done ? '\u2713' : '' }
    </a>
    <a
      className="btn btn-outline-danger btn-sm todo__delete-button"
      onClick={() => removeTodo(todo)}
      href="#"
      style={{
        fontSize: '14px',
        height: '31px',
        width: '29px'
      }}
    >
      {'\u2715'}
    </a>
  </div>
)

export default TodoDetailView
