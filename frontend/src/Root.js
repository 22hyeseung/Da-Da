import React, { Component } from 'react'
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom'
import 'typeface-spoqa-han-sans2/spoqa-han-sans.css'
import 'wfk-montserrat/montserrat.css'
import './Root.css'
import 'semantic-ui-css/semantic.min.css'
import App from './App'

import LoginPage from './pages/LoginPage'

class Root extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            path="/login"
            component={LoginPage}
          />

          <Route path="/" component={App} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default Root
