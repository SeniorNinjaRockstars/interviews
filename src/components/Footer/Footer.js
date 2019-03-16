import React from "react"

import Logo from "../Logo"
import Navigation from "../Navigation"

import { footer } from "./Footer.module.css"

function Footer() {
  return (
    <footer className={footer}>
      <Logo />
      <Navigation />
    </footer>
  )
}

export default Footer
