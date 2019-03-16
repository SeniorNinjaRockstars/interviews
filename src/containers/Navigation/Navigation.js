import React from "react"
import { Link } from "gatsby";

function Logo() {
  return (
    <nav>
      <Link to="/browse">Browse</Link>
      <Link to="/quizz">Quizz</Link>
      <Link to="/submit">Submit</Link>
    </nav>
  )
}

export default Logo;