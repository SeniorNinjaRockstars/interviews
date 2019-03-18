import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

import Heading from "../atoms/Heading"

const Title = styled(Heading)`
  font-size: ${({ theme }) => theme.font.size.heading.primary};
  margin: 0 0 2rem;
  display: flex;
  flex-wrap: wrap;
`

const Wrapper = styled.span`
  overflow: hidden;
  display: block;
  margin-right: 0.27em;
`

const Reveal = styled.span`
  display: inline-block;
  transform: translate(0%, 120%);
  animation: reveal ${({ duration }) => duration}ms ease-in-out;

  @keyframes reveal {
    0% {
      transform: translate(0%, 120%);
    }
    15% {
      transform: translate(0, 0);
    }
    85% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(0%, 120%);
    }
  }
`

const AnimatedTitle = ({ as: Component, text, duration }) => (
  <Title as={Component} key={text}>
    {text.split(" ").map((child) => (
      <Wrapper key={child}>
        <Reveal duration={duration}>
          {child}
        </Reveal>
      </Wrapper>
    ))}
  </Title>
)

AnimatedTitle.propTypes = {
  as: PropTypes.node,
  text: PropTypes.string,
  duration: PropTypes.number,
}
  
export default AnimatedTitle
