import styled from 'styled-components/macro'

import twitterIcon from '../../assets/icons/twitter.svg'
import linkedinIcon from '../../assets/icons/linkedin.svg'
import rssIcon from '../../assets/icons/rss.svg'

import breakpoints from '../globals/Breakpoints'
import ImageLink from '../atoms/ImageLink'
import Spacer from '../atoms/Spacer'
import Container from '../atoms/Container'
import AppButtonLink from '../atoms/AppButtonLink'

export interface Props {
  open?: boolean
}

export default function Menu({ open = false }: Props) {
  return (
    <Wrapper open={open}>
      <Container className='menu-items'>
        <AppButtonLink to='/about' size='big'>
          About
        </AppButtonLink>
        <AppButtonLink to='/thesis' size='big'>
          Thesis
        </AppButtonLink>
        <AppButtonLink to='/companies' size='big'>
          Companies
        </AppButtonLink>
        <AppButtonLink to='/team' size='big'>
          Team
        </AppButtonLink>
        <AppButtonLink to='/values' size='big'>
          Values
        </AppButtonLink>
        <AppButtonLink to='/insights' size='big'>
          Insights
        </AppButtonLink>
      </Container>
      <Container className='contacts'>
        <ImageLink
          alt='Twitter'
          src={twitterIcon}
          href='https://twitter.com/heartcorecap'
          height='27px'
        />
        <Spacer size={53} axis='horizontal' />
        <ImageLink
          alt='Linkedin'
          src={linkedinIcon}
          href='https://www.linkedin.com/company/heartcorecapital/about/'
          height='27px'
        />
        <Spacer size={53} axis='horizontal' />
        <ImageLink
          alt='Twitter'
          src={rssIcon}
          href='https://heartcore.substack.com/'
          height='27px'
        />
      </Container>
    </Wrapper>
  )
}

export const Wrapper = styled.div<Props>`
  position: absolute;
  left: 0;
  top: 80px;
  z-index: 1;

  display: ${({ open }) => (open ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: calc(100% - 80px);

  background-color: var(--light-grey);

  & .menu-items {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    flex-grow: 1;

    padding-top: 20px;
    padding-bottom: 20px;
  }

  & .menu-items > * {
    padding-bottom: 40px;
  }

  & .contacts {
    width: 100%;
    height: 80px;

    @media ${breakpoints.down('tablet')} {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`
