import React from "react"
import { Link } from "gatsby"

import Logo from "../../core/Logo"
import { Container } from "../../core/Containers";

import { FooterWrapper, FooterContent } from './Footer.styled';

const Footer = () => (
  <FooterWrapper>
    <Container>
      <FooterContent>
        <Link to="/">
          <Logo />
        </Link>
      </FooterContent>
    </Container>
  </FooterWrapper>
)

export default Footer
