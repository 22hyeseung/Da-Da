import React from 'react'
import {
  BrowserRouter,
  Route,
} from 'react-router-dom'
import DiaryFood from './DiaryFood'
import DiaryFitness from './DiaryFitness'
import DiaryReview from './DiaryReview'

const DiaryView = () => {
  return (
    <BrowserRouter>
      <div>
        <Route
          exact
          path="/diary"
          component={DiaryFood}
        />
        <Route
          path="/diary/fitness"
          component={DiaryFitness}
        />
        <Route
          path="/diary/review"
          component={DiaryReview}
        />
      </div>
    </BrowserRouter>
  )
}

export default DiaryView
