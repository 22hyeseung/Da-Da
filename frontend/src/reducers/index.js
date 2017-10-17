import { weigthListReducer } from './weight'
import { diaryFoodReducer } from './diaryFood'
import { combineReducers } from 'redux'
import navActiveItemReducer from './navActiveItem'

const reducers = combineReducers({
  weightList: weigthListReducer,
  navActiveItem: navActiveItemReducer,
  // diaryFood: diaryFoodReducer,
})

export default reducers
