import React from "react"

import { card } from "./Card.module.css";

function Card({children}) {
  return (
    <nav className={card}>
      {children}
    </nav>
  )
}

export default Card;