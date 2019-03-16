import React from "react"

import { main } from "./Main.module.css"

function Main({ children }) {
  return <main className={main}>{children}</main>
}

export default Main
