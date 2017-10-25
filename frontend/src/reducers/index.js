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
import { diaryKcalReducer } from './diaryReducer/diaryKcal'
import {
  calorieCartReducer,
  nutritionChartReducer,
} from './reportReducer/chartData'
import {
  recipeReducer,
  recipeSearchReducer,
} from './recipeReducer/recipe'

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
  goalKcal: diaryKcalReducer,
  caloriesChart: calorieCartReducer,
  nutritionChart: nutritionChartReducer,
  recipe: recipeReducer,
  recipeSearchList: recipeSearchReducer,
})

export default reducers
