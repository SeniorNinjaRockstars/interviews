import React from "react"
import PropTypes from "prop-types"

import { TagWrapper } from "./Tag.styled"

const nameToStyle = {
  "JavaScript": "javascript",
  "C++": "cplusplus",
  "Python": "python",
}

const Tag = ({ name }) => (
  <TagWrapper name={nameToStyle[name]}>
    {name}
  </TagWrapper>
)

Tag.propTypes = {
  name: PropTypes.oneOf([
    "JavaScript", "C++", "Python"
  ]).isRequired,
}

export default Tag
