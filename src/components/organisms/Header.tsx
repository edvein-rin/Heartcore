import styled from 'styled-components/macro'

import Container, { ContainerProps } from '../atoms/Container'
import logo from '../../assets/logo.svg'


function Header () {
  return (
    <Wrapper>
      <HeaderContainer>
        <img alt='Heartcore' src={logo}></img>
        <div>Menu</div>
      </HeaderContainer>
    </Wrapper>
  )
}

export const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
`

const HeaderContainer = styled(Container)<ContainerProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  padding: 18px 0;
`


export default Header
