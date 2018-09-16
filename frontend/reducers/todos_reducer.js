import { RECEIVE_TODOS, RECEIVE_TODO, REMOVE_TODO } from '../actions/todo_actions'

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
  3: {
    id: 3,
    title: 'eat car',
    body: 'with soap',
    done: false
  },
  4: {
    id: 4,
    title: 'drink dog',
    body: 'with shampoo',
    done: true
  },
};

const todosReducer = (state = initialState, action) => {
  Object.freeze(state)

  switch (action.type) {
    case RECEIVE_TODOS:
      return Object.keys(action.todos[0]).reduce(
        (accum, key) => { accum[key] = action.todos[0][key]; return accum }, {}
      )
    case RECEIVE_TODO:
      return ({
        [action.todo.id]: action.todo,
        ...state
      })
    case REMOVE_TODO:
      return Object.keys(state)
        .filter((key) => key != action.todo.id)
        .reduce((accum, key) => { accum[key] = state[key]; return accum }, {})
    default:
      return state
  }
}

export default todosReducer

