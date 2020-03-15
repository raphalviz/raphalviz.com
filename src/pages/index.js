import React from "react"

import SEO from "../components/seo"
import Projects from "../components/projects"
import "./index.scss"
import styled from "styled-components"
import About from "../components/about"
import Brand from "../components/brand"
import Experience from "../components/experience"

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 50px;
`

const Section = styled.div`
  margin: 30px 0;
`

const IndexPage = () => {
  return (
    <div>
      <SEO title="Home" />
      <Container>
        <Brand />
        <Section>
          <About />
        </Section>
        <Section>
          <Projects />
        </Section>
        <Section>
          <Experience />
        </Section>
      </Container>
    </div>
  )
}

export default IndexPage
