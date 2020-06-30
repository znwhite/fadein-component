import React from "react"
import styled from "styled-components"

export default function FadeInSection(props) {
  const [isVisible, setVisible] = React.useState(false)
  const domRef = React.useRef()
  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting))
    })
    observer.observe(domRef.current)
  }, [])
  return (
    <Wrapper bgColor={props.bgColor}>
      <div
        className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
        ref={domRef}
      >
        {props.children}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .fade-in-section {
    background-color: ${props => props.bgColor};
    opacity: 0;
    transform: translateY(12vh);
    visibility: hidden;
    transition: opacity 1200ms ease-out, transform 800ms ease-out,
      visibility 1200ms ease-out;
    will-change: opacity, transform, visibility;
  }
  .fade-in-section.is-visible {
    opacity: 1;
    transform: none;
    visibility: visible;
  }

  /* Just for presentational purposes, please disregard in your own implementation */
  .App {
    max-width: 100%;
    padding: 1em;
  }

  .box {
    padding: 50px;
    margin: 20px 0;
  }

  .box span {
    background-color: rgba(255, 255, 255, 0.5);
    display: inline-block;
    padding: 5px;
    border-radius: 3px;
  }

  html {
    box-sizing: border-box;
  }
  * {
    box-sizing: inherit;
  }
`
