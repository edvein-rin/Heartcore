import { createGlobalStyle } from 'styled-components/macro'


export default createGlobalStyle`
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
