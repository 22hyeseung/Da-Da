import React, { Component } from "react"
import {
  BrowserRouter,
  Route,
} from "react-router-dom"
import "semantic-ui-css/semantic.min.css"
import Home from "./pages/Home"

const test = err => {
  console.log(err)
}

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Home />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
