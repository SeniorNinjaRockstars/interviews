import React from "react"
import { Link } from "gatsby"

import Logo from "../../atoms/Logo"
import Container from "../../atoms/Container"
import MainNavigation from "../MainNavigation"

import { HeaderWrapper, HeaderContent } from "./styled.js"

function Header() {
  return (
    <HeaderWrapper>
      <Container>
        <HeaderContent>
          <Link to="/">
            <Logo />
          </Link>
          <MainNavigation />
        </HeaderContent>
      </Container>
    </HeaderWrapper>
  )
}

export default Header
