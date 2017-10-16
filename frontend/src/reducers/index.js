import { weigthListReducer } from './weight'
import authReducer from './auth'
import { combineReducers } from 'redux'
import navActiveItemReducer from './navActiveItem'

const reducers = combineReducers({
  weightList: weigthListReducer,
  navActiveItem: navActiveItemReducer,
  auth: authReducer,
})

export default reducers
