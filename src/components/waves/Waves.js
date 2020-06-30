import React from "react"
import styled from "styled-components"

export const Wave1 = props => {
  return (
    <Svg margin={props.margin} topColor={props.topColor || 'white'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill={props.bottomColor || 'green'}
        fill-opacity="1"
        d="M0,256L60,213.3C120,171,240,85,360,85.3C480,85,600,171,720,208C840,245,960,235,1080,202.7C1200,171,1320,117,1380,90.7L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
      ></path>
    </Svg>
  )
}

const Svg = styled.svg`
  background-color: ${props => props.topColor || "white"};
  margin: ${props => props.margin || 0}
`
