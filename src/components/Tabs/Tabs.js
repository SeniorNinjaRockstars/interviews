import React from "react"
import { Link } from "gatsby";

import { tabs } from "./Tabs.module.css";

function Tabs() {
  return (
    <nav className={tabs}>
      <Link to="/browse">All levels</Link>
      <Link to="/browse/junior">Junior</Link>
      <Link to="/browse/regular">Regular</Link>
      <Link to="/browse/senior">Senior</Link>
    </nav>
  )
}

export default Tabs;