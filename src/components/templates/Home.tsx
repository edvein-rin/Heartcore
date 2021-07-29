import styled from 'styled-components/macro'

import aboutCardImage from '../../assets/cards/about.png'

import Container from '../atoms/Container'
import Section from '../atoms/Section'
import Heading from '../molecules/Heading'
import Card from '../molecules/Card'


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
          <Card
            overline='about'
            title='100% consumer tech'
            description='Specialization drives success'
            image={aboutCardImage}
            bgColor='blue'
            textColor='white'
            noise={true}
          />
          <Card
            overline='thesis'
            title='Making people happy'
            description='We invest in companies re-enchanting the world through technology'
            image={aboutCardImage}
            bgColor='light-grey'
            textColor='grey'
            noise={true}
          />
          <Card
            overline='companies'
            title={<span>Our <em>raison d'être</em></span>}
            description="We're proud to have been among the first investors in 85 category-defining consumer technology companies"
            image={aboutCardImage}
            bgColor='light-orange'
            textColor='dark-orange'
            noise={true}
          />
          <Card
            overline='team'
            title='Global at heart'
            description='A group of investors in love with our craft and passionate about entrepreneurship'
            image={aboutCardImage}
            bgColor='light-yellow'
            textColor='dark-orange'
            noise={true}
          />
          <Card
            overline='values'
            title='Truth + Love = Growth'
            description='Radically different venture capital'
            image={aboutCardImage}
            bgColor='light-blue'
            textColor='blue'
            noise={true}
          />
          <Card
            overline='insights'
            title='Sharing is caring'
            description='Everything you’ve always wanted to know about consumer technology'
            image={aboutCardImage}
            bgColor='lighter-blue'
            textColor='dark-green'
            noise={true}
          />
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
  padding-top: 80px;
  padding-bottom: 80px;
`

export const CardsSection = styled(Section)`
  padding-bottom: 80px;
`

export const CardsContainer = styled(Container)`
  display: grid;
  grid-template-columns: repeat(1fr, 7);
  grid-template-rows: repeat(1fr, 8);
`
