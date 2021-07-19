import { PropsWithChildren } from 'react'
import styled from 'styled-components/macro'

import { Wrapper as SectionWrapper } from '../atoms/Section'


export interface ContainerProps extends PropsWithChildren<{}> {
  className?: string,
}

const Container = ({children, className}: ContainerProps) => {
  return (
    <Wrapper className={className}>
      {children}
    </Wrapper>
  )
}

export const Wrapper = styled.div<ContainerProps>`
  display: flex;

  max-width: 1140px;
  width: 100%;

  padding-left: 30px;
  padding-right: 30px;

  box-sizing: border-box;

  ${SectionWrapper} > & {
    align-self: center;
  }
`

export default Container
