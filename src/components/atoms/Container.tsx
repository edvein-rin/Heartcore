import { PropsWithChildren } from 'react'
import styled from 'styled-components/macro'


export interface ContainerProps extends PropsWithChildren<{}> {
  className?: string
}

const Container = ({children, className}: ContainerProps) => {
  return (
    <Wrapper className={className}>
      {children}
    </Wrapper>
  )
}

export const Wrapper = styled.div<ContainerProps>`
  max-width: 1140px;
`

export default Container
