import React from 'react'
import ReactDOM from 'react-dom'
import Root from './Root'
import Responsive from './Responsive'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
  <Root />,
  document.getElementById('root'),
)
ReactDOM.render(
  <Responsive />,
  document.getElementById('responsive'),
)
registerServiceWorker()
