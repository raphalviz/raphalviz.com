import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import "./index.scss";
import logo from "../images/ra_logo.svg"

const IndexPage = () => {
  return (
    <div>
      <SEO title="Home" />
      <div className="site__container">
        <div className="head__container">
          <div className="logo__container">
            <img src={logo} alt="Raphael Alviz Logo" />
          </div>
          <div className="name__container">
            <h2>Raphael Alviz</h2>
            <h3>Full Stack Developer</h3>
          </div>
        </div>
        <div className="nav__container">
          <ul className="nav__links">
            <li>
              <Link to="/projects/">Projects</Link>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="bg bg__shape bg--top"></div>
        <div className="bg bg__shape bg--bottom"></div>
      </div>
    </div>
  )
}

export default IndexPage
