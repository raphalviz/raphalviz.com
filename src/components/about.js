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
        Hi, I'm Raphael, a full stack developer with an interest in UX &amp; UI design. I graduated from the University of
        Toronto with a degree in Computer Science and have experience designing
        and developing web applications with different technology stacks such as
        MEAN and LAMP stack.
        <br />
        <br />I enjoy learning and experimenting with new technologies and
        continuously find ways to improve my work. Whether it's a back-end
        framework that allows me to easily create a REST API, or a development
        practice such as CI/CD to reliably and
        quickly release new code. Combined with my interest in UX &amp; UI, I am
        dedicated to delivering secure, robust applications with an appealing,
        user-friendly experience.
      </Paragraph>
    </div>
  )
}

export default About
