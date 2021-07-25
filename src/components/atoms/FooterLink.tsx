import LinkButton, { Props as LinkButtonProps } from "./LinkButton"
import styled from 'styled-components/macro'


export type Props = LinkButtonProps

export default function FooterLink (props: Props) {
  return (
    <Wrapper>
      <LinkButton {...props}>
        {props.children}
      </LinkButton>
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
