import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'


export default function Footer () {
  return (
    <Wrapper>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/thesis'>Thesis</Link>
      <Link to='/companies'>Companies</Link>
      <Link to='/team'>Team</Link>
      <Link to='/values'>Values</Link>
      <Link to='/insights'>Insights</Link>
    </Wrapper>
  )
}

export const Wrapper = styled.footer`
  background-color: var(--gray-container-bg-color);
`
