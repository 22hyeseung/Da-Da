import { combineReducers } from 'redux'
import {
  weightListReducer,
  weightAllReducer,
} from './weightReducer/weight'
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
import { calorieGoalReducer } from './diaryReducer/diaryKcalGoal'
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
  weightAll: weightAllReducer,
  shortLog: shortLogReducer,
  longLog: longLogReducer,
  foodLogs: diaryFoodReducer,
  caloriesChart: calorieCartReducer,
  nutritionChart: nutritionChartReducer,
  calorieGoals: calorieGoalReducer,
})

export default reducers
