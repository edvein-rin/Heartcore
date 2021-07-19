import { PropsWithChildren } from 'react'
import styled from 'styled-components/macro'


export interface SectionProps extends PropsWithChildren<{}> {
  className?: string,
}

const Section = ({children, className}: SectionProps) => {
  return (
    <Wrapper className={className}>
      {children}
    </Wrapper>
  )
}

export const Wrapper = styled.div<SectionProps>`
  display: flex;
  flex-direction: column;

  width: 100%;

  box-sizing: border-box;
`

export default Section
