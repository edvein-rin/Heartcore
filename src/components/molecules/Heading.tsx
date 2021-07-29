import styled from 'styled-components/macro'

import { Wrapper as ContainerWrapper } from '../atoms/Container'
import Typography, { Align } from '../atoms/Typography'


export interface Props {
  header: string,
  subtitle: string,
  description?: string,
  align?: Align,
}

export default function Heading ({header, subtitle, description, align}: Props) {
  return (
    <Wrapper>
      <Typography variant='h1' paragraph font='Recoleta' align={align}>{header}</Typography>
      <Typography variant='h5' align={align}>{subtitle}</Typography>
      {description && <Typography align={align}>{description}</Typography>}
    </Wrapper>
  )
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  > * {
    width: 100%;
  }

  ${ContainerWrapper} > & {
    width: 100%;
  }
`
