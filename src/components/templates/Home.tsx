import styled from 'styled-components/macro'

import Container from '../atoms/Container'
import Section from '../atoms/Section'
import Heading from '../molecules/Heading'


export interface Props {
  title: string,
  subtitle: string,
}


export default function Home (props: Props) {
  return (
    <Wrapper>
      <HeaderSection>
        <Container>
          <Heading
            align='center'
            title={props.title}
            subtitle={props.subtitle}
          />
        </Container>
      </HeaderSection>
      <CardsSection>
        <CardsContainer>
          {/* <Card title='' subtitle=''></Card> */}
        </CardsContainer> 
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

export const CardsContainer = styled(Container)`
  display: grid;
  grid-template-columns: repeat(1fr, 7);
  grid-template-rows: repeat(1fr, 8);
`
