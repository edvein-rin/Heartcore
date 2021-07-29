import { createGlobalStyle } from 'styled-components/macro'


export default createGlobalStyle`
  html,
  body,
  div#root {
    padding: 0;
    margin: 0;

    width: 100%;
    height: 100%;

    background-color: var(--background-color);
    color: var(--color);

    font-family: 'Gilroy-Regular', sans-serif;
  }

  * {
    box-sizing: border-box;
  }
`
