import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import { PaginationWrapper } from "./Pagination.styled"
import Button from "../../core/Button";

const Pagination = ({ prev, next }) => (
  <PaginationWrapper>
    <Button as={Link} to={prev} disabled={!prev}>Prev</Button>
    <Button as={Link} to={next} disabled={!next}>Next</Button>
  </PaginationWrapper>
)

Pagination.propTypes = {
  prev: PropTypes.string,
  next: PropTypes.string,
}

export default Pagination
