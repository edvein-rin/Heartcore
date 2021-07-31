import { PropsWithChildren } from 'react'
import styled from 'styled-components/macro'

import { Wrapper as SectionWrapper } from './Section'
import breakpoints from '../globals/Breakpoints'

export interface Props extends PropsWithChildren<{}> {
  className?: string
}

export default function Container({ children, className }: Props) {
  return <Wrapper className={className}>{children}</Wrapper>
}

export const Wrapper = styled.div<Props>`
  display: flex;

  max-width: 1140px;
  width: 100%;

  margin-right: auto;
  margin-left: auto;

  box-sizing: border-box;

  ${SectionWrapper} > & {
    align-self: center;
  }

  @media ${breakpoints.down('tablet')} {
    padding-left: 15px;
    padding-right: 15px;
  }

  @media ${breakpoints.up('tablet')} {
    padding-left: 30px;
    padding-right: 30px;
  }
`
