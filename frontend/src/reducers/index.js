import { combineReducers } from 'redux'
import colorReducer from './colors'
import navActiveReducer from './navActive'

const reducers = combineReducers({
  colors: colorReducer,
  navActive: navActiveReducer,
})

export default reducers
