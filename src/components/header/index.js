import React from "react";
import styled from "@emotion/styled";

import { StaticImage } from "gatsby-plugin-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDiscord, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons"

import Container from "../container";
import Button from "../button";

const Header = () => {
  return (
    <HeaderWrapper>
      <Container>
        <StyledHeader>
          <StaticImage src="../../images/logo-ham-words.png" alt="Chubby Hamsters Logo" placeholder="transparent" />
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
          <HeaderButton>
            <Button>connect</Button>
          </HeaderButton>
        </StyledHeader>
      </Container>
    </HeaderWrapper>
  )
}

const HeaderWrapper  = styled.div`
  background: var(--colors-fg);
  box-shadow: 1px 4px 11px 0px rgba(217,217,217,0.75);
  -webkit-box-shadow: 1px 4px 11px 0px rgba(217,217,217,0.75);
  -moz-box-shadow: 1px 4px 11px 0px rgba(217,217,217,0.75);
`

const StyledHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  padding: .75rem 0;
`

const SocialButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 2rem;

  a {
    margin: 0 1rem;
  }
`

const HeaderButton = styled.div`
  // padding: .5rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default Header