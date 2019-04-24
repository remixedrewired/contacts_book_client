import actionTypes from '../constants/actionTypes'

export default (state = {}, action) => {
  const { payload, type } = action

  switch (type) {
    case actionTypes.CONTACTS.SET:
      return payload.value
    case actionTypes.CONTACTS.SET_ONE:
      const foundIndex = state.findIndex(x => x._id === payload.value._id)
      state[foundIndex] = payload.value
      return state
    case actionTypes.CONTACTS.REMOVE_ONE:
      const index = state.findIndex(x => x._id === payload.value)
      state.splice(index, 1)
      return state
    default:
      return state
  }
}