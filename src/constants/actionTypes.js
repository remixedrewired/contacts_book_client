import { defineAction } from 'redux-define'

export default {
  CONTACTS: defineAction('CONTACTS', ['FETCH', 'SET', 'UPDATE', 'SET_ONE', 'CREATE', 'DELETE', 'REMOVE_ONE']),
  PAGINATION: defineAction('PAGINATION', ['SET']),
  CONTACT_IN_EDIT: defineAction('CONTACT_IN_EDIT', ['SET', 'RESET', 'SET_FIELD']),
  API_RESPONSE: defineAction('API_RESPONSE', ['SET', 'RESET'])
}