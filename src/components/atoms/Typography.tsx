import React, { PropsWithChildren } from 'react'
import styled, { css } from 'styled-components/macro'

import { Color } from '../globals/Colors'
import breakpoints from '../globals/Breakpoints'

export type Align = 'left' | 'center' | 'right'

export type Variant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'subtitle1'
  | 'subtitle2'
  | 'body1'
  | 'body2'
  | 'caption'
  | 'button'
  | 'overline'

export const VariantTagMapping: {
  [variant in Variant]: React.ElementType | keyof JSX.IntrinsicElements
} = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subtitle1: 'h6',
  subtitle2: 'h6',
  body1: 'p',
  body2: 'p',
  caption: 'span',
  button: 'span',
  overline: 'span',
}
export type Font = 'Recoleta' | 'Gilroy'
export type TextCase = 'capitalize' | 'uppercase' | 'lowercase'

export interface Props extends PropsWithChildren<{}> {
  align?: Align
  color?: Color
  hoverColor?: Color
  display?: 'inline' | 'block'
  variant?: Variant
  paragraph?: boolean
  opacity?: number
  font?: Font
  textCase?: TextCase
  weight?: number | string
}

export default function Typography(props: Props) {
  const { variant = 'body1', paragraph = false } = props
  const tag = VariantTagMapping[variant]

  return <Wrapper {...props} variant={variant} paragraph={paragraph} as={tag} />
}

export const Wrapper = styled.span<Props>`
  display: ${({ display }) => display};

  margin-bottom: ${({ paragraph }) => (paragraph ? '30px' : '0px')};
  margin-top: 0px;

  text-align: ${({ align }) => align};
  color: ${({ color }) => color && `var(--${color})`};
  opacity: ${({ opacity }) => opacity};
  font-family: ${({ font }) => font};

  &:hover {
    color: ${({ hoverColor }) => hoverColor && `var(--${hoverColor})`};
  }

  ${({ variant }) => {
    switch (variant) {
      case 'h1':
        return css`
          letter-spacing: ${1.5 / 16}rem;
          font-weight: 300;

          @media ${breakpoints.down('mobileL')} {
            font-size: 3.5rem;
          }
          @media ${breakpoints.up('mobileL')} {
            font-size: 4.7rem;
          }
          @media ${breakpoints.up('tablet')} {
            font-size: 5.3rem;
          }
          @media ${breakpoints.up('laptop')} {
            font-size: 5.9rem;
          }
        `

      case 'h2':
        return css`
          letter-spacing: ${-0.5 / 16}rem;
          font-weight: 300;

          @media ${breakpoints.down('mobileL')} {
            font-size: 2.375rem;
          }
          @media ${breakpoints.up('mobileL')} {
            font-size: 2.9167rem;
          }
          @media ${breakpoints.up('tablet')} {
            font-size: 3.3333rem;
          }
          @media ${breakpoints.up('laptop')} {
            font-size: 3.75rem;
          }
        `

      case 'h3':
        return css`
          letter-spacing: 0;

          @media ${breakpoints.down('mobileL')} {
            font-size: 2.375rem;
          }
          @media ${breakpoints.up('mobileL')} {
            font-size: 2.9167rem;
          }
          @media ${breakpoints.up('tablet')} {
            font-size: 3.3333rem;
          }
          @media ${breakpoints.up('laptop')} {
            font-size: 3.75rem;
          }
        `

      case 'h4':
        return css`
          letter-spacing: ${0.25 / 16}rem;
          font-weight: 500;

          @media ${breakpoints.down('mobileL')} {
            font-size: 1.5625rem;
          }
          @media ${breakpoints.up('mobileL')} {
            font-size: 1.8219rem;
          }
          @media ${breakpoints.up('tablet')} {
            font-size: 2.0243rem;
          }
        `

      case 'h5':
        return css`
          letter-spacing: 0;
          font-weight: 500;

          @media ${breakpoints.down('mobileL')} {
            font-size: 1.25rem;
          }
          @media ${breakpoints.up('mobileL')} {
            font-size: 1.3118rem;
          }
          @media ${breakpoints.up('tablet')} {
            font-size: 1.4993rem;
          }
        `

      case 'h6':
        return css`
          letter-spacing: ${0.15 / 16}rem;
          font-weight: 500;

          @media ${breakpoints.down('mobileL')} {
            font-size: 1.125rem;
          }
          @media ${breakpoints.up('mobileL')} {
            font-size: 1.25rem;
          }
        `

      case 'subtitle1':
        return css`
          font-size: 1rem;
          letter-spacing: ${0.15 / 16}rem;
        `

      case 'subtitle2':
        return css`
          font-size: 0.875rem;
          letter-spacing: ${0.1 / 16}rem;
          font-weight: 500;
        `

      case 'body1':
        return css`
          font-size: 1rem;
          letter-spacing: ${0.5 / 16}rem;
        `

      case 'body2':
        return css`
          font-size: 0.875rem;
          letter-spacing: ${0.25 / 16}rem;
        `

      case 'button':
        return css`
          font-size: 0.875rem;
          letter-spacing: ${1.25 / 16}rem;
          font-weight: 600;
          text-transform: uppercase;
        `

      case 'caption':
        return css`
          font-size: 0.75rem;
          letter-spacing: ${0.4 / 16}rem;
          font-weight: 600;
        `

      case 'overline':
        return css`
          font-size: 0.625rem;
          letter-spacing: ${1.5 / 16}rem;
          font-weight: 600;
          text-transform: uppercase;
        `
      default:
        return css``
    }
  }};

  text-transform: ${({ textCase }) => textCase};
  font-weight: ${({ weight }) => weight};
`
