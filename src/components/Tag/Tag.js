import React from "react"
import PropTypes from "prop-types"

import { TagWrapper } from "./Tag.styled"
import { Link } from "gatsby";

const nameToStyle = {
  "JavaScript": "javascript",
  "C++": "cplusplus",
  "Python": "python",
}

const Tag = ({ name }) => (
  <TagWrapper as={Link} to={`/browse/${name.toLowerCase()}`} name={nameToStyle[name]}>
    {name}
  </TagWrapper>
)

Tag.propTypes = {
  name: PropTypes.oneOf([
    "JavaScript", "C++", "Python"
  ]).isRequired,
}

export default Tag
