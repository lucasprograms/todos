import React from 'react'

const TodoListItem = ({ todo, removeTodo }) => (
  <li
    className="col-12 row mb-2 d-block clearfix"
    style={{ borderBottom: '1px solid black' }}
  >
    <span className="col-8 ml-1">{todo.title}</span>
    <button
      className="btn btn-outline-dark btn-sm float-right"
      onClick={() => removeTodo(todo)}
      style={{
        fontSize: '12px',
        fontWeight: 'bold',
        marginBottom: '8px'
      }}
    >
      &times;
    </button>
  </li>
)

export default TodoListItem;