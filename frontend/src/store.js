import {
  createStore,
  applyMiddleware,
} from 'redux'
import reducers from './reducers'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

// 전체 state를 관리해줌

const createStoreWithMiddleware = applyMiddleware(
  thunk,
  logger,
)(createStore)
// 디버깅할 때 도움이 된다.
const store = createStoreWithMiddleware(reducers)

export default store

// store => redux getState() dispatch 리액트 컴포넌트에 넣어준다<div class="">// </div>
