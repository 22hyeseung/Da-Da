import React, { Component } from 'react'
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
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
        <Provider store={store}>
          <Switch>
            <Route
              path="/login"
              component={LoginPage}
            />

            <Route path="/" component={App} />
          </Switch>
        </Provider>
      </BrowserRouter>
    )
  }
}

export default Root
