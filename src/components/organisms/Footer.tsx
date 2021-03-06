import styled from 'styled-components/macro'

import logo from '../../assets/inline-logo.svg'
import twitterIcon from '../../assets/icons/twitter.svg'
import linkedinIcon from '../../assets/icons/linkedin.svg'
import rssIcon from '../../assets/icons/rss.svg'

import breakpoints from '../globals/Breakpoints'
import Container from '../atoms/Container'
import ButtonLink from '../atoms/ButtonLink'
import Typography from '../atoms/Typography'
import FooterLink from '../atoms/FooterLink'
import ImageLink from '../atoms/ImageLink'
import Spacer from '../atoms/Spacer'

export default function Footer() {
  return (
    <Wrapper>
      <FooterContainer>
        <img alt='Heartcore' src={logo} />
        <ButtonLink
          href='https://heartcore.substack.com/'
          textColor='light-orange'
          textHoverColor='orange'
        >
          subscribe to our newsletter âï¸
        </ButtonLink>

        <div className='quote'>
          <Typography color='grey' variant='h5' font='Recoleta'>
            âIt is only with the heart that one can see rightly; what is
            essential is invisible to the eye.â
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
            <ImageLink
              alt='Twitter'
              src={twitterIcon}
              href='https://twitter.com/heartcorecap'
            />
            <Spacer size={20} axis='horizontal' />
            <ImageLink
              alt='Linkedin'
              src={linkedinIcon}
              href='https://www.linkedin.com/company/heartcorecapital/about/'
            />
            <Spacer size={20} axis='horizontal' />
            <ImageLink
              alt='Twitter'
              src={rssIcon}
              href='https://heartcore.substack.com/'
            />
          </div>
          <ButtonLink
            href='mailto:contact@heartcore.com'
            textCase='none'
            bold={false}
            variant='no-style'
          >
            <Typography variant='body2'>contact@heartcore.com</Typography>
          </ButtonLink>
        </div>
        <div className='copyright'>
          <Typography variant='body2'>
            All rights reserved Â© Heartcore
          </Typography>
          <ButtonLink
            href='https://uploads-ssl.webflow.com/6023c6394b9a4d541b90dcf4/60dc760184ef9d56a3055aca_20210630%20Privacy%20Policy%20.pdf'
            textCase='none'
            bold={false}
            variant='no-style'
          >
            <Typography variant='body2'>Privacy police</Typography>
          </ButtonLink>
        </div>
      </FooterContainer>
    </Wrapper>
  )
}

export const Wrapper = styled.footer`
  padding-top: 60px;
  padding-bottom: 20px;

  background-color: var(--light-grey);

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

    gap: 20px;
  }
`

export const FooterContainer = styled(Container)`
  display: grid;
  gap: 30px;

  @media ${breakpoints.down('tablet')} {
    grid-template-columns: 1fr;
  }

  @media ${breakpoints.up('tablet')} {
    grid-template-columns: 1fr 1fr;
  }
`
