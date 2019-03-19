import React from "react"
import PropTypes from "prop-types"

import { Title, RevealWrapper, Reveal } from "./AnimatedTitle.styled"

const AnimatedTitle = ({ as: Component, text, duration }) => (
  <Title as={Component} key={text}>
    {text.split(" ").map((child) => (
      <RevealWrapper key={child}>
        <Reveal duration={duration}>
          {child}
        </Reveal>
      </RevealWrapper>
    ))}
  </Title>
)

AnimatedTitle.propTypes = {
  as: PropTypes.node,
  text: PropTypes.string,
  duration: PropTypes.number,
}
  
export default AnimatedTitle
