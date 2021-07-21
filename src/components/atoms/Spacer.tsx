import styled from 'styled-components/macro'


export interface Props {
  size: number,
  axis?: 'horizontal' | 'vertical'
}


const Spacer = styled.span<Props>`
  display: inline-block;
  min-width: ${({axis, size}) => axis === 'vertical' ? 1 : size};
  min-height: ${({axis, size}) => axis === 'horizontal' ? 1 : size};
`

export default Spacer
