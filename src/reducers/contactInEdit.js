import actionTypes from '../constants/actionTypes'

export default (state = {}, action) => {
  const { payload, type } = action

  switch (type) {
    case actionTypes.CONTACT_IN_EDIT.SET:
      return { ...payload.value }
    case actionTypes.CONTACT_IN_EDIT.RESET:
      return {}
    case actionTypes.CONTACT_IN_EDIT.SET_FIELD:
      return Object.assign({}, state, { [payload.field]: payload.value.target.value })
    default:
      return state
  }
}