import React from "react"
import PropTypes from "prop-types"

import Container from "../atoms/Container"

const HeroCarousel = ({ children, dynamicList }) => (
  <Container>
    {children}
  </Container>
)

HeroCarousel.defaultProps = {
  children: null,
  dynamicList: [],
}

HeroCarousel.propTypes = {
  children: PropTypes.node,
  dynamicList: PropTypes.array,
}

export default HeroCarousel
