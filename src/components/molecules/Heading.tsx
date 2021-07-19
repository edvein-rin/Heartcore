import { PropsWithChildren } from 'react'
import React from 'react'
import styled from 'styled-components/macro'

import { Wrapper as ContainerWrapper } from '../atoms/Container'


interface HeadingProps extends PropsWithChildren<{}> {
  align?: 'left' | 'right' | 'center'
}


function Heading ({children, align = 'left'}: HeadingProps) {
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

export const Wrapper = styled.span<HeadingProps>`
  display: flex;
  flex-direction: column;

  > * {
    width: 100%;
  }

  ${ContainerWrapper} > & {
    width: 100%;
  }
`


export default Heading
