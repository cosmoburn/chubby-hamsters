import React from 'react'
import styled from '@emotion/styled'
import { StaticImage } from 'gatsby-plugin-image'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDiscord, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons"

import Container from '../container'

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <StyledFooter>
          <StaticImage src="../../images/logo-ham-words.png" alt="Chubby Hamsters Logo" placeholder="transparent" />
          <RightsReserved>
            Chubby Hamsters™
          </RightsReserved>
          <SocialButtons>
            <a>
              <FontAwesomeIcon icon={faDiscord} color="#fe888c" size="2x"/>
            </a>
            <a>
              <FontAwesomeIcon icon={faTwitter} color="#c7cafd" size="2x"/>
            </a>
            <a>
              <FontAwesomeIcon icon={faInstagram} color="#fdad62" size="2x"/>
            </a>
          </SocialButtons>
        </StyledFooter>
      </Container>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.div`
  background-color: var(--colors-fg);
  box-shadow: 1px 4px 11px 0px rgba(217,217,217,0.75);
  -webkit-box-shadow: 1px 4px 11px 0px rgba(217,217,217,0.75);
  -moz-box-shadow: 1px 4px 11px 0px rgba(217,217,217,0.75);
`

const StyledFooter = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  padding: .75rem 0;
`

const RightsReserved = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--colors-h2);
  padding-left: 2rem;
`

const SocialButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  a {
    margin: 0 1rem;
  }
`

export default Footer