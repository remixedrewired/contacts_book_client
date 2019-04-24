import { call, put } from 'redux-saga/effects'
import { set as setApiResponse } from '../actions/apiResponse'
import { removeOne } from '../actions/contacts'
import { plainRequest } from '../helpers/request'

export default function* contactDelete(contact) {
  const { payload: { value: _id } } = contact
  const request = plainRequest()

  try {
    const response = yield call(request.delete, `/contact/${_id}`)
    if (response && response.data && response.data.code === 204)
      yield put(removeOne(_id))

    yield put(setApiResponse(response.data))
  } catch (error) {
    yield put(setApiResponse(error.response.data))
  }
}