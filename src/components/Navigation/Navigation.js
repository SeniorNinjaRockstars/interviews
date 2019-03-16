import React from "react"
import { Link } from "gatsby";

import { navigation } from "./Navigation.module.css";

function Logo() {
  return (
    <nav className={navigation}>
      <Link to="/browse">Browse</Link>
      <Link to="/quizz">Quizz</Link>
      <Link to="/submit">Submit</Link>
    </nav>
  )
}

export default Logo;