import { call, put } from 'redux-saga/effects'
import { setOne } from '../actions/contacts'
import { set as setApiResponse } from '../actions/apiResponse'
import { plainRequest } from '../helpers/request'

export default function* contactUpdate(contact) {
  const {
    payload: {
      value: {
        _id,
        first_name,
        last_name,
        phone_number
      }
    }
  } = contact
  const request = plainRequest()

  try {
    const updateResponse = yield call(request.patch, `/contact/${_id}`, { first_name, last_name, phone_number })
    if (updateResponse.data && updateResponse.data.code === 204)
      yield put(setOne({ _id, first_name, last_name, phone_number }))

    yield put(setApiResponse(updateResponse.data))
  } catch (error) {
    yield put(setApiResponse(error.response.data))
  }
}