import { combineReducers } from 'redux'
import {
  weightListReducer,
  weightAllReducer,
} from './weightReducer/weight'
import authReducer from './authReducer/auth'
import navActiveItemReducer from './appReducer/navActiveItem'
import {
  commentReducer,
  articleReducer,
} from './diaryReducer/diaryReview'
import {
  todayDateReducer,
  beforeDateReducer,
} from './appReducer/date'
import { diaryFoodReducer } from './diaryReducer/diaryFood'
import { diaryFitnessReducer } from './diaryReducer/diaryFitness'
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
  // app Reducer
  today: todayDateReducer,
  beforeDay: beforeDateReducer,
  navActiveItem: navActiveItemReducer,
  // auth Reducer
  auth: authReducer,
  // diary Reducer
  //// review ////
  comment: commentReducer,
  article: articleReducer,
  //// food ////
  foodLogs: diaryFoodReducer,
  //// fitness ////
  fitness: diaryFitnessReducer,
  //// goal ////
  goalKcal: diaryKcalReducer,
  //// summary ////
  diarySummary: diarySummaryReducer,
  // report Reducer
  caloriesChart: calorieChartReducer,
  nutritionChart: nutritionChartReducer,
  calorySummary: calorySummaryReducer,
  nutritionSummary: nutritionSummaryReducer,
  // weight Reducer
  weightList: weightListReducer,
  weightAll: weightAllReducer,
  // recipe Reducer
  recipe: recipeReducer,
  recipeSearchList: recipeSearchReducer,
})

export default reducers
