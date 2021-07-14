import React from 'react'
import ReactDOM from 'react-dom'
import { createGlobalStyle } from "styled-components/macro";

// import 'normalize.css'

import App from './components/organisms/App'

const GlobalStyles = createGlobalStyle`
  @import url('http://fonts.cdnfonts.com/css/gilroy-bold');
  @import url('http://fonts.cdnfonts.com/css/recoleta');


  html,
  body,
  div#root {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
  }

  body {
    font-family: 'Gilroy-Regular', sans-serif;
    color: #2b2b2b;
  }

  h1 {
    margin-top: 0px;
    margin-bottom: 30px;

    font-family: 'Recoleta', sans-serif;
    font-size: 85px;
    font-weight: 400;
    line-height: 85px;
    letter-spacing: 0.01em;
  }
`

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
