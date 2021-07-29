import { createGlobalStyle } from 'styled-components/macro'


export type Color = 'white' | 'black' | 'light-grey' | 'grey' | 'dark-blue' | 'light-orange' | 'orange' | 'dark-orange' | 'light-yellow' | 'light-blue' | 'blue' | 'lighter-blue' | 'dark-green'

export default createGlobalStyle`
  html {
    --white: #fff;
    --black: #2b2b2b;
    --light-grey: #edf0f7;
    --grey: #4d4d4d;
    --dark-blue: #293b78;
    --lighter-orange: #dfba84;
    --light-orange: #f88e53;
    --orange: #f95d06;
    --dark-orange: #893c01;
    --light-yellow: #f9e39d;
    --light-blue: #8cb8e1;
    --blue: #0b5194;
    --lighter-blue: #a8d7d1;
    --dark-green: #1b5f57;

    --background-color: var(--white);
    --color: var(--black);
    --highlight-color: var(--orange);
  }
`
