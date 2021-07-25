import { PropsWithChildren } from 'react'
import React from 'react'
import styled from 'styled-components/macro'

import { Wrapper as ContainerWrapper } from '../atoms/Container'
import { Align } from '../atoms/Typography'


export interface Props extends PropsWithChildren<{}> {
  align?: Align,
}

export default function Heading ({children, align = 'left'}: Props) {
  return (
    <Wrapper>
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {align})
        }
        return child
      })}
    </Wrapper>
  )
}

export const Wrapper = styled.span<Props>`
  display: flex;
  flex-direction: column;

  > * {
    width: 100%;
  }

  ${ContainerWrapper} > & {
    width: 100%;
  }
`
