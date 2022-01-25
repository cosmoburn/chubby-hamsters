import React from "react"
import styled from "@emotion/styled"

import Container from "../components/container"
import Header from "../components/header"

import wavingHam from '../images/waving-ham.gif'
import Carousel from "../components/carousel"
import Footer from "../components/footer"

const IndexPage = () => {
  return (
    <div>
      {/* Header */}
      <Header />
      {/* Intro */}
      <Container>
        <PageSection>
          <MintImage>
            <img src={wavingHam} alt="Waving Hamster" />
          </MintImage>
          <MintAction>
            <h1>Get Your Hammster</h1>
            <h2>Come back on xx.xx.xx to mint.</h2>
          </MintAction>
        </PageSection>
      </Container>
      
      {/* Sneak Peaks */}
      <ColoredBg bg="var(--colors-bg-light)">
        <Container padding="5rem 0">
          <h1>Meet the Chubby Hamsters!</h1>
          <Carousel/>
        </Container>
      </ColoredBg>

      {/* Roadmap */}
      <ColoredBg>
        <Container padding="5rem 0">
          <h1>Roadmap Section</h1>
        </Container>
      </ColoredBg>  

      {/* Team */}
      <ColoredBg bg="var(--colors-bg-light)">
        <Container padding="5rem 0">
          <h1>Team Section</h1>
        </Container>
      </ColoredBg>  

      {/* Footer */}
      <Footer />
    </div>
  )
}

const ColoredBg = styled.div`
  background-color: ${p => p.bg || 'none'};
  box-shadow: 1px 4px 11px 0px rgba(217,217,217,0.75);
  -webkit-box-shadow: 1px 4px 11px 0px rgba(217,217,217,0.75);
  -moz-box-shadow: 1px 4px 11px 0px rgba(217,217,217,0.75);
`

const PageSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  padding: 5rem 0;
`

const MintImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 400px;
  }
`

const MintAction = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default IndexPage