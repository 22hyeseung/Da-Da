import React from 'react'
import {
  Route,
  withRouter,
} from 'react-router-dom'
import DiaryFood from './DiaryFood'
import DiaryFitness from './DiaryFitness'
import DiaryReview from './DiaryReview'

const DiaryViewRouter = props => {
  return (
    <div>
      <Route
        exact
        path={props.match.url}
        component={DiaryFood}
      />
      <Route
        path={`${props.match.url}/fitness`}
        component={DiaryFitness}
      />
      <Route
        path={`${props.match.url}/review`}
        component={DiaryReview}
      />
    </div>
  )
}

export default withRouter(DiaryViewRouter)
