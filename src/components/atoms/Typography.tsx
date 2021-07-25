import React, { PropsWithChildren } from 'react';
import styled, { css } from 'styled-components/macro'
import { Color } from '../globals/Colors';

export type Align = 'left' | 'center' | 'right'
export type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'caption' | 'button' | 'overline'
export const VariantTagMapping : {[variant in Variant]: React.ElementType | keyof JSX.IntrinsicElements} = {
  'h1': 'h1',
  'h2': 'h2',
  'h3': 'h3',
  'h4': 'h4',
  'h5': 'h5',
  'h6': 'h6',
  'subtitle1': 'h6',
  'subtitle2': 'h6',
  'body1': 'p',
  'body2': 'p',
  'caption': 'span',
  'button': 'span',
  'overline': 'span',
}

export interface Props extends PropsWithChildren<{}> {
  align?: Align,
  color?: Color,
  display?: 'inline' | 'block',
  variant?: Variant,
  paragraph?: boolean,
}

export default function Typography ({children, align, color, display, variant = 'body1', paragraph = false}: Props) {
  const tag = VariantTagMapping[variant]
 
  return (
    <Wrapper children={children} as={tag} align={align} color={color} display={display} variant={variant} paragraph={paragraph}/>
  )
}

export const Wrapper = styled.span<Props>`
  display: ${({display}) => display};
  
  margin-bottom: ${({paragraph}) => paragraph ? '30px' : '0px'};
  margin-top: 0px;

  text-align: ${({align}) => align};
  color: ${({color}) => color && 'var(--' + color + ')'};
  
  ${({variant}) => {
    switch (variant) {
      case 'h1':
        return css`
          font-family: Recoleta, sans-serif;
          font-size: 85px;
          line-height: 85px;
          font-weight: 400;
          letter-spacing: 0.01em;
        `

      case 'h4':
        return css`
          font-family: Recoleta, sans-serif;
          font-size: 26px;
          line-height: 120%;
          letter-spacing: -0.02em;
          font-weight: 400;
        `

      case 'h5':
        return css`
          opacity: 0.8;
          font-size: 24px;
          margin-bottom: 0px;
          margin-top: 0px;
          font-weight: 400;
          line-height: 130%;
        `
      
      case 'body2':
        return css`
          font-size: 14px;
        `

      case 'caption':
        return css`
          font-size: 12px;
          line-height: 14px;
          letter-spacing: 0.09em;
          weight: 600;
        `
    }
  }}
`
