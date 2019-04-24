import { combineReducers } from 'redux'
import contacts from './contacts'
import pagination from './pagination'
import contactInEdit from './contactInEdit'
import apiResponse from './apiResponse'

export default combineReducers({
  contacts,
  pagination,
  contactInEdit,
  apiResponse
})
