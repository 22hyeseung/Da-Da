import { combineReducers } from 'redux'
import { weigthListReducer } from './weight'
import authReducer from './auth'
import navActiveItemReducer from './navActiveItem'
import { diaryFoodReducer } from './diaryFood'
import readingRegretReducer from './readRegret'
import readingCommentReducer from './readComment'

const reducers = combineReducers({
  weightList: weigthListReducer,
  navActiveItem: navActiveItemReducer,
  auth: authReducer,
  foodLogs: diaryFoodReducer,
  readRegret: readingRegretReducer,
  readComment: readingCommentReducer,
})

export default reducers
