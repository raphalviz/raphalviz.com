import React from "react"
import Title from "./title"
import styled from "styled-components"
import Divider from "./divider"

const Paragraph = styled.p`
  margin-bottom: 0;
  font-size: 0.9rem;

  @media screen and (max-width: 840px) {
    padding: 0 40px;
  }
`

const About = () => {
  return (
    <div>
      <Title>About</Title>
      <Divider />
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Paragraph>
    </div>
  )
}

export default About
