import {
  createStore,
  applyMiddleware,
} from 'redux'
import reducers from './reducers'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

// 배포용 빌드 시 logger 제외
let createStoreWithMiddleware

if (process.env.NODE_ENV === 'production') {
  createStoreWithMiddleware = applyMiddleware(
    thunk,
  )(createStore)
} else {
  createStoreWithMiddleware = applyMiddleware(
    thunk,
    logger,
  )(createStore)
}

const store = createStoreWithMiddleware(reducers)
export default store
