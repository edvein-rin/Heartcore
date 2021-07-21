import styled from 'styled-components/macro'

import Header from './Header'
import Main from './Main'
import Footer from './Footer'


export default function App () {
  return (
    <Wrapper>
      <Header />
      <Main />
      <Footer />
    </Wrapper>
  )
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;

  & > * {
    width: 100%;
  }
`
