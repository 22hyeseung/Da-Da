import authReducer from './auth'
import { combineReducers } from 'redux'
import navActiveItemReducer from './navActiveItem'

const reducers = combineReducers({
  navActiveItem: navActiveItemReducer,
  auth: authReducer,
})

export default reducers
