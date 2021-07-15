import { PropsWithChildren } from 'react'
import styled from 'styled-components/macro'


const Container = ({children}: PropsWithChildren<{}>) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}

export default Container

export const Wrapper = styled.div`
  max-width: 1200px;
`
