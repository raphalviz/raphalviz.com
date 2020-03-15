import React from "react"
import Title from "./title"
import Row from "./row"
import Column from "./column"
import Project from "./project"
import Divider from "./divider"
import { useStaticQuery, graphql, Link } from "gatsby"

const Projects = () => {
  const { allGhostPost } = useStaticQuery(graphql`
    query ProjectPosts {
      allGhostPost(
        filter: { tags: { elemMatch: { name: { eq: "projects" } } } }
      ) {
        edges {
          node {
            id
            tags {
              id
            }
            html
            featureImageSharp {
              childImageSharp {
                fluid(maxWidth: 300) {
                  src
                }
              }
            }
            slug
          }
        }
      }
    }
  `)

  console.log(allGhostPost.edges)

  let projectArray = []
  let newRow = []
  for (let i = 0; i < allGhostPost.edges.length; i++) {
    if (i % 3 === 0) {
      newRow = []
    }
    newRow.push(allGhostPost.edges[i])
    if (i % 3 === 0) {
      projectArray.push(newRow)
    }
  }

  let ProjectGrid = []
  projectArray.forEach((row, j) => {
    ProjectGrid.push(
      <Row key={j}>
        {row.map((project, i) => {
          return (
            <Column key={i}>
              <Link to={`/${project.node.slug}`}>
                <Project
                  thumb={
                    project.node.featureImageSharp.childImageSharp.fluid.src
                  }
                  altText={project.node.slug}
                ></Project>
              </Link>
            </Column>
          )
        })}
      </Row>
    )
  })

  return (
    <div>
      <Title>Portfolio</Title>
      <Divider />
      {ProjectGrid}
      {ProjectGrid}
    </div>
  )
}

export default Projects
