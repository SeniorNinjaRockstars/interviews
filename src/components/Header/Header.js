import React from "react"
import { Link } from "gatsby"

import Logo from "../../core/Logo"
import { Container } from "../../core/Containers"
import MainNavigation from "../MainNavigation"

import { HeaderWrapper, HeaderContent } from "./Header.styled.js"

function Header() {
  return (
    <HeaderWrapper>
      <Container>
        <HeaderContent>
          <Link to="/">
            <Logo light />
          </Link>
          <MainNavigation />
        </HeaderContent>
      </Container>
    </HeaderWrapper>
  )
}

export default Header
