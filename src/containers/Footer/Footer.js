import React from "react"

import Logo from "../../atoms/Logo"
import Navigation from "../Navigation"
import Container from "../../atoms/Container";

function Footer() {
  return (
    <footer>
      <Container>
        <Logo />
        <Navigation />
      </Container>
    </footer>
  )
}

export default Footer
