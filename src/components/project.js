import React from "react"
import styled from "styled-components"

const Square = styled.div`
  padding-bottom: 100%;
  width: 100%;
  position: relative;
  background: lightgray;
`

const SquareContent = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`

const Thumbnail = styled.img`
  width: unset;
`

const Project = props => {
  return (
    <Square>
      <SquareContent>
        {props.children}
        {<Thumbnail src={props.thumb} alt={props.altText} />}
      </SquareContent>
    </Square>
  )
}

export default Project
