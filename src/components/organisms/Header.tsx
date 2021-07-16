import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'


function Header () {
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

const Wrapper = styled.header``

export default Header
