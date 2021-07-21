import { PropsWithChildren } from 'react'
import styled from 'styled-components/macro'


export interface Props extends PropsWithChildren<{}> {
  style?: 'no-style' | null
}


export default function Button ({children}: Props) {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}

export const Wrapper = styled.div`
  font-size: bold;
`
