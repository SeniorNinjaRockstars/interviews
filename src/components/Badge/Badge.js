import React from "react"

import Logo from "../Logo"
import Navigation from "../Navigation"

import badge from "./Badge.module.css"

function Badge({text}) {
  return (
    <footer className={badge.default + " " + badge[text]}>
      {text}
    </footer>
  )
}

export default Badge
