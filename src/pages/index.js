import React from "react"

import SEO from "../components/seo"
import Projects from "../components/projects"
import "./index.scss"
import logo from "../images/ra_logo.svg"
import styled from "styled-components"
import About from "../components/about"

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 50px;
`

const Section = styled.div`
  margin: 30px 0;
`

const IndexPage = () => {
  return (
    <div>
      <SEO title="Home" />
      <Container>
        <div className="head__container">
          <div className="logo__container">
            <img src={logo} alt="Raphael Alviz Logo" />
          </div>
          <div className="name__container">
            <h2>Raphael Alviz</h2>
            <h3>Full Stack Developer</h3>
          </div>
        </div>
        <Section>
          <About />
        </Section>
        <Section>
          <Projects />
        </Section>
      </Container>
    </div>
  )
}

export default IndexPage
