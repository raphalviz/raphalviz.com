import React from "react"
import styled from "styled-components"

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 0.5%;
`

const Row = props => {
  return <Div>{props.children}</Div>
}

export default Row
