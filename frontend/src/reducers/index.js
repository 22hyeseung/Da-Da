import colorReducer from './colors'
import { weigthListReducer } from './weight'
import { combineReducers } from 'redux'
import navActiveItemReducer from './navActiveItem'

const reducers = combineReducers({
  weightList: weigthListReducer,
  colors: colorReducer,
  navActiveItem: navActiveItemReducer,
})

export default reducers
