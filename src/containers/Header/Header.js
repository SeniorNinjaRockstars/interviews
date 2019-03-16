import React from "react"
import { Link } from "gatsby"

import Logo from "../../atoms/Logo"
import Container from "../../atoms/Container"
import Navigation from "../Navigation"

import { Wrapper, Content } from "./styled.js"

function Header() {
  return (
    <Wrapper>
      <Container>
        <Content>
          <Link to="/">
            <Logo />
          </Link>
          <Navigation />
        </Content>
      </Container>
    </Wrapper>
  )
}

export default Header
