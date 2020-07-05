export const SET_AUTHED_USER = "SET_AUTHED_USER"
export const GET_AUTHED_USER = "GET_AUTHED_USER"

export function authedUser () {
  return {
    type: GET_AUTHED_USER,
    authedUser
  }
}