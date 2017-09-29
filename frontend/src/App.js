import React, { Component } from 'react'
import {
  BrowserRouter,
  Route,
} from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import { Header } from './components/Header'
import HomePage from './pages/HomePage'
import DiaryPage from './pages/DiaryPage'
import ReportPage from './pages/ReportPage'
import WeightPage from './pages/WeightPage'
import SearchPage from './pages/SearchPage'

const routes = [
  {
    linkLabel: '다이어리',
    linkTo: '/diary',
  },
  {
    linkLabel: '리포트',
    linkTo: '/report',
  },
  {
    linkLabel: '체중',
    linkTo: '/weight',
  },
  {
    linkLabel: '검색',
    linkTo: '/search',
  },
]

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <div className="ui container">
            {routes.map(route => (
              <Header
                key={route.linkLabel}
                linkTo={route.linkTo}
                label={route.linkLabel}
              />
            ))}
          </div>
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
            path="/search"
            component={SearchPage}
          />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
