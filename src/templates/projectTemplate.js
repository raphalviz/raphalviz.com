import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import Brand from "../components/brand"
import Title from "../components/title"
import Divider from "../components/divider"
import SEO from "../components/seo"

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 50px;
  font-family: "Raleway", Arial, Helvetica, sans-serif;
`

const Content = styled.div`
  margin-top: 30px;
`

const StyledLink = styled(Link)`
  text-decoration: none !important;
`

const ProjectPost = ({ data }) => {
  const post = data.ghostPost

  return (
    <Container>
      <SEO title={post.title} />
      <StyledLink to="/" color="black">
        <Brand />
      </StyledLink>
      <Content>
        <Title>{post.title}</Title>
        <Divider />
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
      </Content>
    </Container>
  )
}

export default ProjectPost

export const postQuery = graphql`
  query($slug: String!) {
    ghostPost(slug: { eq: $slug }) {
      html
      title
    }
  }
`
