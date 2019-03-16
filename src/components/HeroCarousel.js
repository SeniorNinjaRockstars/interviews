import React, { useState } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import Container from "../atoms/Container"

const HeroCarousel = ({ staticContent, dynamicList }) => (
  <Container>
    {staticContent}
  </Container>
)

HeroCarousel.defaultProps = {
  staticContent: null,
  dynamicList: [],
}

HeroCarousel.propTypes = {
  staticContent: PropTypes.node,
  dynamicList: PropTypes.array,
}

export default HeroCarousel
