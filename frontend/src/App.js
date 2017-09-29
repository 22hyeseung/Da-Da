import React, { Component } from 'react'
import {
  BrowserRouter,
  Route,
} from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import DiaryPage from './pages/DiaryPage'
import ReportPage from './pages/ReportPage'
import WeightPage from './pages/WeightPage'
import SearchPage from './pages/SearchPage'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Route
            exact
            path="/"
            component={LoginPage}
          />

          <Route
            path="/home"
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
            path="/search"
            component={SearchPage}
          />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
