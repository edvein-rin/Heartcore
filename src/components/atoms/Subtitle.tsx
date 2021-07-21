import { PropsWithChildren } from 'react';
import styled from 'styled-components/macro'

import { Wrapper as HeadingWrapper } from '../molecules/Heading'


export interface Props extends PropsWithChildren<{}> {
  align?: 'left' | 'right' | 'center'
}


export default function Subtitle ({children, align='left'}: Props) {
  return (
    <Wrapper align={align}>{children}</Wrapper>
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

  ${HeadingWrapper} > & {
    opacity: 0.8;
    font-size: 24px;
    margin-bottom: 0px;
    margin-top: 0px;
    line-height: 130%;
  }
`
