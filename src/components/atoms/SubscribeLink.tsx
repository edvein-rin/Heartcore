import styled from 'styled-components'
import LinkButton, { Props as LinkButtonProps } from '../atoms/LinkButton'
import Typography from './Typography'

export type Props = LinkButtonProps

export default function SubscribeLinkButton () {
  return (
    <Wrapper to='https://heartcore.substack.com/'>
      <Typography>subscribe to our newsletter ↗️</Typography>
    </Wrapper>
  )
}

export const Wrapper = styled(LinkButton)<Props>`
  && {
    color: var(--light-orange);
  }

  &:hover {
    color: var(--orange);
  }
`
