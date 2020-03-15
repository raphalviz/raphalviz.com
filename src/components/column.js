import React from "react"
import styled from "styled-components"

const Div = styled.div`
  max-width: 33%;
  width: 100%;
`

const Column = props => {
  return <Div>{props.children}</Div>
}

export default Column
