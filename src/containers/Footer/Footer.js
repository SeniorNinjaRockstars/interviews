import React from "react"
import { Link } from "gatsby"

import Logo from "../../atoms/Logo"
import NavList from "../NavList"
import Container from "../../atoms/Container";

import { FooterWrapper, FooterContent } from './styled';

const Footer = () => (
  <FooterWrapper>
    <Container>
      <FooterContent>
        <Link to="/">
          <Logo />
        </Link>
        <NavList />
      </FooterContent>
    </Container>
  </FooterWrapper>
)

export default Footer
