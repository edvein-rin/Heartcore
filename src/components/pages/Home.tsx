import styled from 'styled-components/macro'
import Container from '../atoms/Container'
import Section from '../atoms/Section'


function Home () {
  return (
    <Wrapper>
      <Section>
        <Container>
          Home Page
        </Container>
      </Section>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`

export default Home
