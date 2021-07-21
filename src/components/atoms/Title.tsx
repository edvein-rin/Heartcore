import { PropsWithChildren } from 'react';
import styled from 'styled-components/macro'

import { Wrapper as HeadingWrapper } from '../molecules/Heading'


export interface Props extends PropsWithChildren<{}> {
  align?: 'left' | 'right' | 'center'
}


export default function Title ({children, align = 'left'}: Props) {
  return (
    <Wrapper align={align}>
      <h1>{children}</h1>
    </Wrapper>
  )
}

export const Wrapper = styled.div<Props>`
  display: flex;
  justify-content: ${({align}) => {
    switch (align) {
      case 'left':
        return 'flex-start'
      case 'right':
        return 'flex-end'
      case 'center':
        return 'center'
    }
  }};

  ${HeadingWrapper} > & > h1 {
    margin-top: 0px;
    margin-bottom: 30px;
    font-family: Recoleta, sans-serif;
    font-size: 85px;
    line-height: 85px;
    font-weight: 400;
    letter-spacing: 0.01em;
  }
`
