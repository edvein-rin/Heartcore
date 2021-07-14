import styled from 'styled-components/macro'


function App() {
  return (
    <Wrapper>
      <h1>Investing in happiness.</h1>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
`

export default App
