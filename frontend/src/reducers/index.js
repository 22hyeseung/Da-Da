import { combineReducers } from 'redux'
// app
import { todayDateReducer } from './appReducer/date'
// auth
import authReducer from './authReducer/auth'
// diary
import { diaryFoodReducer } from './diaryReducer/diaryFood'
import { diaryFitnessReducer } from './diaryReducer/diaryFitness'
import {
  commentReducer,
  articleReducer,
} from './diaryReducer/diaryReview'
import { diaryKcalReducer } from './diaryReducer/diaryKcal'
import { diarySummaryReducer } from './diaryReducer/diarySummary'
// report
import {
  calorySummaryReducer,
  nutritionSummaryReducer,
} from './reportReducer/summaryData'
import {
  calorieChartReducer,
  nutritionChartReducer,
} from './reportReducer/chartData'
// weight
import {
  weightListReducer,
  weightAllReducer,
} from './weightReducer/weight'
// recipe
import {
  recipeReducer,
  recipeSearchReducer,
} from './recipeReducer/recipe'

const reducers = combineReducers({
  // app Reducer
  today: todayDateReducer,
  // auth Reducer
  auth: authReducer,
  // diary Reducer
  //   |__ review
  comment: commentReducer,
  article: articleReducer,
  //   |__ food
  foodLogs: diaryFoodReducer,
  //   |__ fitness
  fitness: diaryFitnessReducer,
  //   |__ goal
  goalKcal: diaryKcalReducer,
  //   |__ summary
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
