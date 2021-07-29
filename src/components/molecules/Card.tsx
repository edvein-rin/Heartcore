import styled from 'styled-components/macro'
import React from 'react'

import noiseImage from '../../assets/cards/noise.png'

import { Color } from '../globals/Colors'
import Typography from '../atoms/Typography'


export interface Props {
  overline: React.ReactNode,
  title: React.ReactNode,
  description: React.ReactNode,
  bgColor: Color,
  textColor?: Color,
  image: any,
  noise?: boolean,
}

export default function Card (props: Props) {
  return (
    <Wrapper {...props}>
      <Typography variant='overline' paragraph>{props.overline}</Typography>
      <Typography variant='h4'font='Recoleta'>{props.title}</Typography>
      <Typography opacity={0.8}>{props.description}</Typography>
    </Wrapper>
  )
}

export const Wrapper = styled.div<Props>`
  padding: 25px 30px;

  background-color: ${({bgColor}) => 'var(--' + bgColor + ')'};
  color: ${({textColor}) => textColor && 'var(--' + textColor + ')'};
`