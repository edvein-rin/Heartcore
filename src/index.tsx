import React from 'react'
import ReactDOM from 'react-dom'

import 'normalize.css'

import GlobalColors from './components/globals/Colors'
import GlobalStyles from './components/globals/Styles'
import App from './components/organisms/App'


ReactDOM.render(
  <React.StrictMode>
    <GlobalColors />
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
