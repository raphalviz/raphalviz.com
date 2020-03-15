import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import NavBar from "../components/navbar"
import Project from "../components/project"
export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <div>
      <SEO title="Projects" />
      <NavBar />
      <div className="content">
        <h1 className="content__title">Projects</h1>
        <div className="content__body content__projects">
          <Project />
          <Project />
          <Project />
        </div>
        <div className="blog-post">
          <h1>{frontmatter.title}</h1>
          <h2>{frontmatter.date}</h2>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </div>
  )
}
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
