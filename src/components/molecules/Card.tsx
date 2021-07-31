import styled from 'styled-components/macro'
import React from 'react'

// import noiseImage from '../../assets/cards/noise.png'

import { Color } from '../globals/Colors'
import Typography from '../atoms/Typography'

export interface Props {
  overline: React.ReactNode
  header: React.ReactNode
  description: React.ReactNode
  bgColor: Color
  textColor?: Color
  image: any
  noise?: boolean
}

export default function Card(props: Props) {
  const { overline, header, description } = props

  return (
    <Wrapper {...props}>
      <Typography variant='overline' paragraph>
        {overline}
      </Typography>
      <Typography variant='h4' font='Recoleta'>
        {header}
      </Typography>
      <Typography opacity={0.8}>{description}</Typography>
    </Wrapper>
  )
}

export const Wrapper = styled.div<Props>`
  padding: 25px 30px;

  background-color: ${({ bgColor }) => `var(--${bgColor})`};
  color: ${({ textColor }) => textColor && `var(--${textColor})`};
`
