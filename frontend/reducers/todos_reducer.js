import { RECEIVE_TODOS, RECEIVE_TODO } from '../actions/todo_actions'

const initialState = {
  1: {
    id: 1,
    title: 'wash car',
    body: 'with soap',
    done: false
  },
  2: {
    id: 2,
    title: 'wash dog',
    body: 'with shampoo',
    done: true
  },
};

const todosReducer = (state = initialState, action) => {
  Object.freeze(state)

  switch (action.type) {
    case RECEIVE_TODOS:
      return Object.keys(action.todos[0]).reduce(
        (accum, key) => accum[key] = action.todos[0][key], {}
      )
    case RECEIVE_TODO:
      return ({
        [action.todo.id]: action.todo,
        ...state
      })
    default:
      return state
  }
}

export default todosReducer

