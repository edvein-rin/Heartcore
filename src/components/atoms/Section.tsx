import { PropsWithChildren } from 'react'
import styled from 'styled-components/macro'

export interface Props extends PropsWithChildren<{}> {
  className?: string
}

export default function Section({ children, className }: Props) {
  return <Wrapper className={className}>{children}</Wrapper>
}

export const Wrapper = styled.div<Props>`
  display: flex;
  flex-direction: column;

  width: 100%;

  box-sizing: border-box;
`
