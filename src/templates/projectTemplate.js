import React from "react"
import { graphql } from "gatsby"

const ProjectPost = ({ data }) => {
  const post = data.ghostPost

  return (
    <div>
      <h1>{post.title}</h1>
      <section dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
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
