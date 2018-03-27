import { css } from 'styled-components'

export const colors = {
  primary: 'rgba(0, 13, 85, 0.8)',
  black: '#000',
  white: '#fff',
  gradientLight: 'rgba(0, 38, 255, 0.8)',
  gradientDark: 'rgba(0, 0, 0, 0.8)'
}

export const fontSizes = {
  large: '6rem',
  medium: '4rem',
  small: '2.2rem',
  default: '1.8rem'
}

export const screenSizes = {
  desktop: '112.5em',
  tablet: '75em',
  phone: '56.25em'
}

export const utilities = {
  marginSmall: '1.5rem',
  marginMedium: '4rem',
  marginLarge: '8rem'
}

export const media = {
  phone: (...args) => css`
    @media only screen and (max-width: 37.5em) {
      ${css(...args)}
    }
  `,
  tabPort: (...args) => css`
    @media only screen and (max-width: 56.25em) {
      ${css(...args)}
    }
  `,
  tabLand: (...args) => css`
    @media only screen and (max-width: 75em) {
      ${css(...args)}
    }
  `,
  desktop: (...args) => css`
    @media only screen and (min-width: 112.5em) {
      ${css(...args)}
    }
  `
}
