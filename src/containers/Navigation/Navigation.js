import React, { useState } from "react"
import { Link } from "gatsby"

import MenuButton from "../../components/MenuButton"

import { Nav, NavWrapper, NavList, MainNavLink, NavOverlay } from './styled.js'

const Navigation = () => {
  const [menuState, setMenuState] = useState(false)

  const onLinkClick = () => setMenuState(false)
  const onOverlayClick = () => setMenuState(false)
  const onMenuClick = () => setMenuState(!menuState)

  return (
    <>
      <Nav isMenuOpened={menuState}>
        <NavWrapper isMenuOpened={menuState}>
          <NavList>
            <li>
              <MainNavLink as={Link} to="/browse" onClick={onLinkClick}>
                Browse
              </MainNavLink>
            </li>
            <li>
              <MainNavLink as={Link} to="/quiz" onClick={onLinkClick}>
                Quiz
              </MainNavLink>
            </li>
            <li>
              <MainNavLink as={Link} to="/submit" onClick={onLinkClick}>
                Submit
              </MainNavLink>
            </li>
          </NavList>
        </NavWrapper>
      </Nav>
      <MenuButton onClick={onMenuClick} isMenuOpened={menuState} />
      <NavOverlay isVisible={menuState} onClick={onOverlayClick} />
    </>
  )
}

export default Navigation
