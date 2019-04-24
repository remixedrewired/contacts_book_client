import actionTypes from '../constants/actionTypes'

export default (state = {}, action) => {
  const { payload, type } = action

  switch (type) {
    case actionTypes.API_RESPONSE.SET:
      return { ...payload.value }
    case actionTypes.API_RESPONSE.RESET:
      return {}
    default:
      return state
  }
}