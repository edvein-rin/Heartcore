import styled from 'styled-components/macro'
import AppLinkButton, { Props as LinkButtonProps } from './AppButtonLink'

export type Props = LinkButtonProps

export default function FooterLink(props: Props) {
  const { children } = props
  return (
    <Wrapper>
      <AppLinkButton {...props}>{children}</AppLinkButton>
    </Wrapper>
  )
}

export const Wrapper = styled.span`
  &&&& {
    font-size: 14px;
    line-height: 14px;
    font-weight: 600;
    letter-spacing: 0.09em;
    text-transform: uppercase;
  }
`
