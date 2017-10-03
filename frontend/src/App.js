import React, { Component } from 'react'
import {
  BrowserRouter,
  Route,
} from 'react-router-dom'
import 'typeface-spoqa-han-sans2/spoqa-han-sans.css'
import 'wfk-montserrat/montserrat.css'
import './App.css'
import 'semantic-ui-css/semantic.min.css'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import DiaryPage from './pages/DiaryPage'
import ReportPage from './pages/ReportPage'
import WeightPage from './pages/WeightPage'
import SearchPage from './pages/SearchPage'

/* 페이지 확인용 라우터 -> 나중에 ajax로 처리할 화면입니다.*/
import SearchResultPage from './pages/SearchPage/ResultPage'

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
          <Route
            path="/search-result"
            component={SearchResultPage}
          />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
