import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import { List, ListLink } from './styled.js'

const NavList = ({ onLinkClick }) => (
  <List>
    <li>
      <ListLink as={Link} to="/browse" onClick={onLinkClick}>
        Browse
      </ListLink>
    </li>
    <li>
      <ListLink as={Link} to="/quiz" onClick={onLinkClick}>
        Quiz
      </ListLink>
    </li>
    <li>
      <ListLink as={Link} to="/submit" onClick={onLinkClick}>
        Submit
      </ListLink>
    </li>
  </List>
)

NavList.propTypes = {
  onLinkClick: PropTypes.func,
}

export default NavList
