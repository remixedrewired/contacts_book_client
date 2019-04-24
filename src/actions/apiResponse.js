import actionTypes from '../constants/actionTypes'

export const set = value => dispatch => dispatch({
  type: actionTypes.API_RESPONSE.SET,
  payload: { value }
})

export const reset = () => dispatch => dispatch({
  type: actionTypes.API_RESPONSE.RESET
})