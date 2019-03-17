import React from "react"
import { Link } from "gatsby"

import Logo from "../../atoms/Logo"
import Container from "../../atoms/Container"
import Navigation from "../Navigation"

import { HeaderWrapper, HeaderContent } from "./styled.js"

function Header() {
  return (
    <HeaderWrapper>
      <Container>
        <HeaderContent>
          <Link to="/">
            <Logo />
          </Link>
          <Navigation />
        </HeaderContent>
      </Container>
    </HeaderWrapper>
  )
}

export default Header
