import actionTypes from '../constants/actionTypes'

const initialState = {
  currentPage: 1
}

export default (state = initialState, action) => {
  const { payload, type } = action

  switch (type) {
    case actionTypes.PAGINATION.SET:
      return Object.assign({}, state, { 'currentPage': payload.value })
    default:
      return state
  }
}