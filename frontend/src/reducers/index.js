import { weigthListReducer } from './weight'
import { combineReducers } from 'redux'
import navActiveItemReducer from './navActiveItem'

const reducers = combineReducers({
  weightList: weigthListReducer,
  navActiveItem: navActiveItemReducer,
})

export default reducers
