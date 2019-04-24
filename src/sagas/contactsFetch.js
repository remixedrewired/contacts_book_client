import { call, put } from 'redux-saga/effects'
import { set as setContacts } from '../actions/contacts'
import { set as setApiResponse } from '../actions/apiResponse'
import { plainRequest } from '../helpers/request'

export default function* contactsFetch() {
  const request = plainRequest()
  try {
    const response = yield call(request.get, '/contact/all')
    if (response.data && response.data.code === 200)
      yield put(setContacts(response.data.contacts.sort((a, b) => a.first_name.localeCompare(b.first_name))))

  } catch (error) {
    yield put(setApiResponse(error.response.data))
  }
}