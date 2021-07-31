import styled from 'styled-components/macro'
import { useState } from 'react'

import Container, { Props as ContainerProps } from '../atoms/Container'
import logo from '../../assets/logo.svg'
import MenuButton from '../atoms/MenuButton'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false)

  return (
    <Wrapper menuOpen={menuOpen}>
      <HeaderContainer>
        <img alt='Heartcore' src={logo} />
        <MenuButton
          onOpenChange={(open: boolean) => {
            setMenuOpen(open)
          }}
        />
      </HeaderContainer>
    </Wrapper>
  )
}

export const Wrapper = styled.header<{ menuOpen: boolean }>`
  padding-top: 18px;
  padding-bottom: 18px;

  background-color: ${({ menuOpen }) => menuOpen && 'var(--light-grey)'};
`

export const HeaderContainer = styled(Container)<ContainerProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
