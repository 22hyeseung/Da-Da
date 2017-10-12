import colorReducer from './colors'
import { weigthListReducer } from './weight'
import { combineReducers } from 'redux'

const reducers = combineReducers({
  weightList: weigthListReducer,
})

export default reducers
