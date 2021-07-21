import styled from 'styled-components/macro'

import Container from '../atoms/Container'
import Section from '../atoms/Section'
import Heading from '../molecules/Heading'
import Title from '../atoms/Title'
import Subtitle from '../atoms/Subtitle'


export default function Home () {
  return (
    <Wrapper>
      <HeaderSection>
        <Container>
          <Heading align='center'>
            <Title>Investing in happiness.</Title>
            <Subtitle>Europe's consumer technology VC</Subtitle>
          </Heading>
        </Container>
      </HeaderSection>
      <CardsSection>
        <Container>

        </Container> 
      </CardsSection>
    </Wrapper>
  )
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const HeaderSection = styled(Section)`
  padding-top: 158px;
  padding-bottom: 125px;
`

export const CardsSection = styled(Section)`
  
`
