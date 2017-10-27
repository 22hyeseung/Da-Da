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
import { diaryFitnessReducer } from './diaryReducer/diaryFitness'
import { calorieGoalReducer } from './diaryReducer/diaryKcalGoal'
import { diarySummaryReducer } from './diaryReducer/diarySummary'
import { diaryKcalReducer } from './diaryReducer/diaryKcal'

import {
  calorieChartReducer,
  nutritionChartReducer,
} from './reportReducer/chartData'
import {
  recipeReducer,
  recipeSearchReducer,
} from './recipeReducer/recipe'
import {
  calorySummaryReducer,
  nutritionSummaryReducer,
} from './reportReducer/summaryData'

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
  fitness: diaryFitnessReducer,
  caloriesChart: calorieChartReducer,
  goalKcal: diaryKcalReducer,
  nutritionChart: nutritionChartReducer,
  recipe: recipeReducer,
  recipeSearchList: recipeSearchReducer,
  calorieGoalAboutADay: calorieGoalReducer,
  diarySummary: diarySummaryReducer,
  calorySummary: calorySummaryReducer,
  nutritionSummary: nutritionSummaryReducer,
})

export default reducers
