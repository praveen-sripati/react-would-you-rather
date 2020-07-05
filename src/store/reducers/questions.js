import { RECEIVE_QUESTIONS } from "../actions/questions";

export function users (state = {}, action) {
  switch(action.type) {
    case RECEIVE_QUESTIONS:
      return {...state, ...action.questions}
    default :
      return state
  }
}