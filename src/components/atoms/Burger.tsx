import styled from "styled-components"

import burgerIcon from '../../assets/icons/burger.svg'
import Spacer from "./Spacer"


export interface Props {
  open?: boolean,
}

export default function Burger ({open = false}: Props) {
  return (
    <Wrapper open={open}>
      <img alt='' src={burgerIcon} width='19px' height='3px'/>
      <Spacer size={3} axis='vertical' />
      <img alt='' src={burgerIcon} width='19px' height='3px'/>
    </Wrapper>
  )
}

export const Wrapper = styled.div<Props>`
  display: flex;
  flex-direction: column;
  height: max-content;
`