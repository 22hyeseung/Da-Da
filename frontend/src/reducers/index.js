import colorReducer from './colors'
import { combineReducers } from 'redux'

const reducers = combineReducers({
  colors: colorReducer,
})

export default reducers
