import React from "react"
import { Link } from "gatsby"

import Logo from "../../core/Logo"
import NavList from "../NavList"
import Container from "../../core/Container";

import { FooterWrapper, FooterContent } from './Footer.styled';

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
