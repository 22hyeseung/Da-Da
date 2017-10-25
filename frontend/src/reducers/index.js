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
import { diaryKcalReducer } from './diaryReducer/diaryKcal'
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
<<<<<<< HEAD
  fitness: diaryFitnessReducer,
=======
  goalKcal: diaryKcalReducer,
>>>>>>> 246c2b47af48c0162dd0768bb2573dd57af0fee1
  caloriesChart: calorieCartReducer,
  nutritionChart: nutritionChartReducer,
})

export default reducers
