import React from "react"
import { Link } from "gatsby"

import logo from "../images/ra_logo.svg"
import "./navbar.scss"

export default function NavBar() {
  return (
    <div className="nav">
      <Link className="nav__brand-link" to="/">
        <div className="nav__brand">
          <img className="nav__logo" src={logo} alt="Raphael Alviz Logo" />
          <div className="nav__divider"></div>
          <div className="nav__header-text">
            <h2 className="nav__title">Raphael Alviz</h2>
            <h3 className="nav__subtitle">Full Stack Developer</h3>
          </div>
        </div>
      </Link>
      <div className="nav__links nav__links--centered">
        <ul className="nav__ul" style={{ margin: 0 }}>
          <li>
            <Link to="/projects/" activeClassName="nav__link--active">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/about/">About</Link>
          </li>
          <li>
            <Link to="/contact/">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
