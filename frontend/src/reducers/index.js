import { weigthListReducer } from './weight'
import { combineReducers } from 'redux'
import navActiveItemReducer from './navActiveItem'
import readingRegretReducer from './readRegret'
import readingCommentReducer from './readComment'

const reducers = combineReducers({
  weightList: weigthListReducer,
  navActiveItem: navActiveItemReducer,
  readRegret: readingRegretReducer,
  readComment: readingCommentReducer,
})

export default reducers
