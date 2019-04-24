import { call, put } from 'redux-saga/effects'
import { set as setApiResponse } from '../actions/apiResponse'
import { set as setContacts } from '../actions/contacts'
import { plainRequest } from '../helpers/request'

export default function* contactCreate(contact) {
  const {
    payload: {
      value: {
        first_name,
        last_name,
        phone_number
      }
    }
  } = contact

  const request = plainRequest()

  try {
    const response = yield call(request.post, '/contact', { first_name, last_name, phone_number })
    if (response && response.data && response.data.code === 201) {
      const fetchResponse = yield call(request.get, '/contact/all')

      if (fetchResponse && fetchResponse.data && fetchResponse.data.code === 200)
        yield put(setContacts(fetchResponse.data.contacts.sort((a, b) => a.first_name.localeCompare(b.first_name))))
    }

    yield put(setApiResponse(response && response.data))
  } catch (error) {
    yield put(setApiResponse(error.response.data))
  }
}