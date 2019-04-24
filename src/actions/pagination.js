import actionTypes from '../constants/actionTypes'

export const set = value => dispatch => dispatch({
  type: actionTypes.PAGINATION.SET,
  payload: { value }
})