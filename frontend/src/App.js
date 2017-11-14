import React, { Component } from 'react'
import {
  Route,
  Redirect,
  Switch,
} from 'react-router-dom'
import { connect } from 'react-redux'
import HomePage from './pages/HomePage'
import DiaryPage from './pages/DiaryPage'
import ReportPage from './pages/ReportPage'
import WeightPage from './pages/WeightPage'
import SearchPage from './pages/SearchPage'
import RecipePage from './pages/RecipePage'
// import Helmet from 'react-helmet'
// import favicon from './static/img/favicon-96x96.png'
import SearchResultPage from './pages/SearchPage/ResultPage'
import NotFoundPage from './pages/404Page'

// import Helmet from 'react-helmet'
class App extends Component {
  render() {
    /* Login 상태가 아닌 경우에 다른 페이지로 접근하면
       Login페이지로 Redirect하여 접근을 막음 */
    if (!window.localStorage.token) {
      return <Redirect to="/login" />
    }
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/"
            component={HomePage}
          />
          <Route
            path="/diary"
            component={DiaryPage}
          />
          <Route
            path="/report"
            component={ReportPage}
          />
          <Route
            path="/weight"
            component={WeightPage}
          />
          <Route
            path="/search/:sc"
            component={SearchResultPage}
          />
          <Route
            path="/search"
            component={SearchPage}
          />
          <Route
            path="/recipe/:id"
            component={RecipePage}
          />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    token: state.auth.token,
  }
}

export default connect(mapStateToProps, null)(App)
