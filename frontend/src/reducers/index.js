import { combineReducers } from 'redux'
import colorReducer from './colors'
import navActiveItemReducer from './navActiveItem'

const reducers = combineReducers({
  colors: colorReducer,
  navActiveItem: navActiveItemReducer,
})

export default reducers
