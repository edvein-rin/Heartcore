import { createGlobalStyle } from 'styled-components/macro'


export default createGlobalStyle`
  @font-face {
    font-family: Gilroy;
    src: url('https://uploads-ssl.webflow.com/6023c6394b9a4d541b90dcf4/6023c6394b9a4d9d3f90dd1d_Gilroy-Regular.otf');
    font-weight: normal;
  }

  @font-face {
    font-family: Gilroy;
    src: url('https://uploads-ssl.webflow.com/6023c6394b9a4d541b90dcf4/6023c6394b9a4dd77390dd1e_Gilroy-Semibold.otf');
    font-weight: bold;
  }

  @font-face {
    font-family: Recoleta;
    src: url('https://uploads-ssl.webflow.com/6023c6394b9a4d541b90dcf4/6023c6394b9a4d618f90dd1c_Recoleta%20Regular.otf');
  }


  html,
  body,
  div#root {
    padding: 0;
    margin: 0;

    width: 100%;
    height: 100%;

    background-color: var(--background-color);
    color: var(--color);

    font-family: Gilroy, sans-serif;
  }

  * {
    box-sizing: border-box;
  }

  a, a:link, a:visited, a:hover, a:active {
    text-decoration: none;
    color: inherit;

    transition: all 300ms ease;
  }

  a:hover {
    color: var(--highlight-color);
  }
`
