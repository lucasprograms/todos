import { RECEIVE_STEPS, RECEIVE_STEP, REMOVE_STEP, TOGGLE_COMPLETE_STEP } from '../actions/step_actions'

const stepsReducer = (state = {}, action) => {
  Object.freeze(state)

  switch (action.type) {
    default:
      return state
  }
}

export default stepsReducer