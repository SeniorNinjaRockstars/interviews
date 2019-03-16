import React from "react"

import Logo from "../Logo"
import Navigation from "../Navigation"

import { header } from "./Header.module.css"

function Header() {
  return (
    <header className={header}>
      <Logo />
      <Navigation />
    </header>
  )
}

export default Header
