import React from "react"
import logo from "../images/ra_logo.svg"

const Brand = () => {
  return (
    <div className="head__container">
      <div className="logo__container">
        <img src={logo} alt="Raphael Alviz Logo" />
      </div>
      <div className="name__container">
        <h2>Raphael Alviz</h2>
        <h3>Full Stack Developer</h3>
      </div>
    </div>
  )
}

export default Brand
