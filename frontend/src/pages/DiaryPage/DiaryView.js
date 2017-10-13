import React from 'react'
import {
  BrowserRouter,
  Route,
  Switch,
  withRouter,
} from 'react-router-dom'
import DiaryFood from './DiaryFood'
import DiaryFitness from './DiaryFitness'
import DiaryReview from './DiaryReview'

const DiaryView = props => {
  return (
    <div>
      {/* <Switch> */}
      <Route
        exact
        path={`${props.match.url}`}
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
      {/* </Switch> */}
    </div>
  )
}

export default withRouter(DiaryView)
