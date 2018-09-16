import React from 'react'
import TodoListItem from './todo_list_item'
import TodoListForm from './todo_list_form'

const TodoList = ({ todos, receiveTodo, removeTodo }) => (
  <div className="row mt-3 todo-list">
    <ul className="col-6 row" style={{ backgroundColor: 'beige' }}>
      {todos.map((todo) => <TodoListItem key={todo.id} todo={todo} removeTodo={removeTodo}/> )}
    </ul>
    <div className="row col-12">
      <TodoListForm receiveTodo={receiveTodo} />
    </div>
  </div>
) 

export default TodoList;