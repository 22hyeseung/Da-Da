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
  // dateNavigationReducer,
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
  navActiveItem: navActiveItemReducer,
  today: todayDateReducer,
  beforeDay: beforeDateReducer,
  auth: authReducer,
  weightList: weightListReducer,
  weightAll: weightAllReducer,
  comment: commentReducer,
  article: articleReducer,
  foodLogs: diaryFoodReducer,
  fitness: diaryFitnessReducer,
  caloriesChart: calorieChartReducer,
  goalKcal: diaryKcalReducer,
  nutritionChart: nutritionChartReducer,
  recipe: recipeReducer,
  recipeSearchList: recipeSearchReducer,
  diarySummary: diarySummaryReducer,
  calorySummary: calorySummaryReducer,
  nutritionSummary: nutritionSummaryReducer,
  // dateNavigation: dateNavigationReducer,
})

export default reducers
