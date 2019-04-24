import actionTypes from '../constants/actionTypes'

export const set = value => dispatch => dispatch({
  type: actionTypes.CONTACT_IN_EDIT.SET,
  payload: { value }
})

export const reset = () => dispatch => dispatch({
  type: actionTypes.CONTACT_IN_EDIT.RESET
})

export const setContactFields = (field, value) => dispatch => dispatch({
  type: actionTypes.CONTACT_IN_EDIT.SET_FIELD,
  payload: { field, value }
})