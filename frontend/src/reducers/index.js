import { combineReducers } from 'redux'
import { weightListReducer } from './weightReducer/weight'
import authReducer from './authReducer/auth'
import navActiveItemReducer from './appReducer/navActiveItem'
import {
  shortLogReducer,
  longLogReducer,
} from './diaryReducer/diaryReview'
import {
  todayDateReducer,
  beforeDateReducer,
} from './appReducer/date'
import { diaryFoodReducer } from './diaryReducer/diaryFood'
import {
  calorieCartReducer,
  nutritionChartReducer,
} from './reportReducer/chartData'

const reducers = combineReducers({
  navActiveItem: navActiveItemReducer,
  today: todayDateReducer,
  beforeDay: beforeDateReducer,
  auth: authReducer,
  weightList: weightListReducer,
  shortLog: shortLogReducer,
  longLog: longLogReducer,
  foodLogs: diaryFoodReducer,
  caloriesChart: calorieCartReducer,
  nutritionChart: nutritionChartReducer,
})

export default reducers
