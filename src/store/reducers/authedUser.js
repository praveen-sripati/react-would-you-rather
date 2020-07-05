import { SET_AUTHED_USER } from "../actions/authedUser";

export function users (state = {}, action) {
  switch(action.type) {
    case SET_AUTHED_USER:
      return action.id
    default :
      return state
  }
}