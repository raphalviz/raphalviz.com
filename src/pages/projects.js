import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import NavBar from "../components/navbar"
import "./common.scss"
import Project from "../components/project"

const Projects = () => (
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
    </div>
  </div>
)

export default Projects
