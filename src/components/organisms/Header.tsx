import styled from 'styled-components/macro'

import Container, { Props as ContainerProps } from '../atoms/Container'
import logo from '../../assets/logo.svg'
import MenuButton from '../atoms/MenuButton'


export default function Header () {
  return (
    <Wrapper>
      <HeaderContainer>
        <img alt='Heartcore' src={logo}></img>
        <MenuButton />
      </HeaderContainer>
    </Wrapper>
  )
}

export const Wrapper = styled.header`
  padding-top: 18px;
  padding-bottom: 18px;
`

export const HeaderContainer = styled(Container)<ContainerProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
