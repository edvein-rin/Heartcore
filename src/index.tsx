import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router } from 'react-router-dom'

import 'normalize.css'

import GlobalColors from './components/globals/Colors'
import GlobalStyles from './components/globals/Styles'
import App from './components/organisms/App'


ReactDOM.render(
  <React.StrictMode>
    <GlobalColors />
    <GlobalStyles />
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
