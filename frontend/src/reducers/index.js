import { weigthListReducer } from './weight'
import { combineReducers } from 'redux'
import navActiveItemReducer from './navActiveItem'
import readingRegretReducer from './readRegret'

const reducers = combineReducers({
  weightList: weigthListReducer,
  navActiveItem: navActiveItemReducer,
  readRegret: readingRegretReducer,
})

export default reducers
