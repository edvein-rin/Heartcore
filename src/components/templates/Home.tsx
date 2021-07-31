import styled from 'styled-components/macro'

import aboutCardImage from '../../assets/cards/about.png'

import Container from '../atoms/Container'
import Section from '../atoms/Section'
import Heading from '../molecules/Heading'
import Card from '../molecules/Card'

export interface Props {
  header: string
  subtitle: string
}

export default function Home(props: Props) {
  const { header, subtitle } = props

  return (
    <Wrapper>
      <HeaderSection>
        <Container>
          <Heading align='center' header={header} subtitle={subtitle} />
        </Container>
      </HeaderSection>
      <CardsSection>
        <CardsContainer>
          <Card
            overline='about'
            header='100% consumer tech'
            description='Specialization drives success'
            image={aboutCardImage}
            bgColor='blue'
            textColor='white'
            noise
          />
          <Card
            overline='thesis'
            header='Making people happy'
            description='We invest in companies re-enchanting the world through technology'
            image={aboutCardImage}
            bgColor='light-grey'
            textColor='grey'
            noise
          />
          <Card
            overline='companies'
            header={
              <span>
                Our <em>raison d&#39;être</em>
              </span>
            }
            description="We're proud to have been among the first investors in 85 category-defining consumer technology companies"
            image={aboutCardImage}
            bgColor='light-orange'
            textColor='dark-orange'
            noise
          />
          <Card
            overline='team'
            header='Global at heart'
            description='A group of investors in love with our craft and passionate about entrepreneurship'
            image={aboutCardImage}
            bgColor='light-yellow'
            textColor='dark-orange'
            noise
          />
          <Card
            overline='values'
            header='Truth + Love = Growth'
            description='Radically different venture capital'
            image={aboutCardImage}
            bgColor='light-blue'
            textColor='blue'
            noise
          />
          <Card
            overline='insights'
            header='Sharing is caring'
            description='Everything you’ve always wanted to know about consumer technology'
            image={aboutCardImage}
            bgColor='lighter-blue'
            textColor='dark-green'
            noise
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
