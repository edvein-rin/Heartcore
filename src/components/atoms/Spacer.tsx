import { PropsWithChildren } from 'react'
import styled from 'styled-components/macro'


interface SpacerProps extends PropsWithChildren<{}> {
  size: number,
  axis?: 'horizontal' | 'vertical'
}


const Spacer = styled.span<SpacerProps>`
  display: inline-block;
  min-width: ${({axis, size}) => axis === 'vertical' ? 1 : size};
  min-height: ${({axis, size}) => axis === 'horizontal' ? 1 : size};
`

export default Spacer
