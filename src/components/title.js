import React from "react"

import styled from "styled-components"

const StyledTitle = styled.h2`
  color: #525252;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-align: center;
`

const Title = props => {
  return <StyledTitle>{props.children}</StyledTitle>
}

export default Title
