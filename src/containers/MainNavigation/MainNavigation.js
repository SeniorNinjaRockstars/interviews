import React, { useState } from "react"
import { Link } from "gatsby"

import MenuButton from "../../components/MenuButton"
import NavList from "../NavList";

import { Nav, NavWrapper, NavOverlay } from './styled.js'

const MainNavigation = () => {
  const [menuState, setMenuState] = useState(false)

  const onLinkClick = () => setMenuState(false)
  const onOverlayClick = () => setMenuState(false)
  const onMenuClick = () => setMenuState(!menuState)

  return (
    <>
      <Nav isMenuOpened={menuState}>
        <NavWrapper isMenuOpened={menuState}>
          <NavList onLinkClick={onLinkClick} />
        </NavWrapper>
      </Nav>
      <MenuButton onClick={onMenuClick} isMenuOpened={menuState} />
      <NavOverlay isVisible={menuState} onClick={onOverlayClick} />
    </>
  )
}

export default MainNavigation
