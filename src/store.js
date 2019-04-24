import { createStore, applyMiddleware, compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './reducers'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

function intializeStore() {
  const store = createStore(
    rootReducer,
    {},
    composeWithDevTools(
      applyMiddleware(thunkMiddleware, sagaMiddleware)
    )
  )
  sagaMiddleware.run(rootSaga)

  return store
}

const createStoreWithSagas = compose()(intializeStore)

export default createStoreWithSagas()