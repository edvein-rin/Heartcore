import styled from 'styled-components/macro'

import logo from '../../assets/inline-logo.svg'
import twitterIcon from '../../assets/icons/twitter.svg'
import linkedinIcon from '../../assets/icons/linkedin.svg'
import rssIcon from '../../assets/icons/rss.svg'

import Container from '../atoms/Container'
import LinkButton from '../atoms/LinkButton'
import SubscribeLinkButton from '../atoms/SubscribeLink'
import Typography from '../atoms/Typography'
import FooterLink from '../atoms/FooterLink'
import ImageLink from '../atoms/ImageLink'
import Spacer from '../atoms/Spacer'


export default function Footer () {
  return (
    <Wrapper>
      <FooterContainer>
        <img alt='Heartcore' src={logo}></img>
        <SubscribeLinkButton />
        
        <div className='quote'>
          <Typography color='gray' variant='h4'>
            “It is only with the heart that one can see rightly; what is essential is invisible to the eye. ”
        </Typography>
        </div>
        <div className='links'>
          <FooterLink to='/about'>About</FooterLink>
          <FooterLink to='/thesis'>Thesis</FooterLink>
          <FooterLink to='/companies'>Companies</FooterLink>
          <FooterLink to='/team'>Team</FooterLink>
          <FooterLink to='/values'>Values</FooterLink>
          <FooterLink to='/insights'>Insights</FooterLink>
        </div>

        <div className='contacts'>
          <div>
            <ImageLink alt='Twitter' src={twitterIcon} to='https://twitter.com/heartcorecap' />
            <Spacer size={20} axis='horizontal'></Spacer>
            <ImageLink alt='Linkedin' src={linkedinIcon} to='https://www.linkedin.com/company/heartcorecapital/about/' />
            <Spacer size={20} axis='horizontal'></Spacer>
            <ImageLink alt='Twitter' src={rssIcon} to='https://heartcore.substack.com/' />
          </div>
          <LinkButton to='mailto:contact@heartcore.com' textCase='none' bold={false}>
            <Typography variant='caption'>contact@heartcore.com</Typography>
          </LinkButton>
        </div>
        <div className='copyright'>
          <Typography variant='caption'>All rights reserved © Heartcore</Typography>
          <LinkButton to='https://uploads-ssl.webflow.com/6023c6394b9a4d541b90dcf4/60dc760184ef9d56a3055aca_20210630%20Privacy%20Policy%20.pdf' textCase='none' bold={false}>
            <Typography variant='caption'>Privacy police</Typography>
          </LinkButton>
        </div>
      </FooterContainer>
    </Wrapper>
  )
}

export const Wrapper = styled.footer`
  padding-top: 60px;
  padding-bottom: 20px;

  background-color: var(--light-gray);

  & .quote {
    max-width: 405px;
  }

  & .contacts,
  & .copyright {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  & .links {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  }
`

export const FooterContainer = styled(Container)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
`
