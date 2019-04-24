import { takeEvery, takeLatest } from 'redux-saga/effects'
import actionTypes from '../constants/actionTypes'

import contactsFetch from './contactsFetch'
import contactUpdate from './contactUpdate'
import contactCreate from './contactCreate'
import contactDelete from './contactDelete'

export default function* () {
  yield takeEvery(actionTypes.CONTACTS.FETCH, contactsFetch)
  yield takeLatest(actionTypes.CONTACTS.UPDATE, contactUpdate)
  yield takeLatest(actionTypes.CONTACTS.CREATE, contactCreate)
  yield takeLatest(actionTypes.CONTACTS.DELETE, contactDelete)
}