import styled from 'styled-components/macro'

import Container from '../atoms/Container'
import Section from '../atoms/Section'
import Heading from '../molecules/Heading'
import Title from '../atoms/Title'
import Subtitle from '../atoms/Subtitle'


export interface Props {
  title: string,
  subtitle: string,
}


export default function Home (props: Props) {
  return (
    <Wrapper>
      <HeaderSection>
        <Container>
          <Heading align='center'>
            <Title>{props.title}</Title>
            <Subtitle opacity={0.8}>{props.subtitle}</Subtitle>
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
