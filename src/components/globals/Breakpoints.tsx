export type Size = 'mobileS' | 'mobileM' | 'mobileL' | 'tablet' | 'laptop' | 'laptopL' | 'desktop'
export type Sizes = {[size in Size]: string}

export const sizes: Sizes = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '480px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
}

export interface Breakpoints {
  up (size: Size): string,
  down (size: Size): string,
  only (size: Size): string,
}

const breakpoints: Breakpoints = {
  up: (size: Size) => `(min-width: ${sizes[size]})`,
  down: (size: Size) => `(max-width: ${sizes[size]})`,
  only: (size: Size) => `(width: ${sizes[size]})`,
}

export default breakpoints
