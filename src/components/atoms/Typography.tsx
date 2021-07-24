import React, { PropsWithChildren } from 'react';
import styled from 'styled-components/macro'
import { Color } from '../globals/Colors';


type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'caption' | 'button' | 'overline'
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
  align?: 'left' | 'center' | 'right',
  color?: Color,
  display?: 'inline' | 'block',
  variant?: Variant,
}

export default function Typography ({children, align = 'left', color = 'black', display = 'inline', variant = 'body1'}: Props) {
  const tag = VariantTagMapping[variant]
 
  return (
    <Wrapper children={children} as={tag} align={align} color={color} display={display} variant={variant} />
  )
}

export const Wrapper = styled.span<Props>``
