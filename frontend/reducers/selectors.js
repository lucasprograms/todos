export const allTodos = (state) =>
  Object.keys(state.todos).map((key) => state.todos[key])

export const stepsByTodoId = (state, todoId) => {
  state.steps.filter(step => step.todoId === todoId)
}
