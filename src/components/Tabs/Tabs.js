import React from "react"
import { Link } from "gatsby"

import { TabsNavLink } from "./Tabs.styled";

const Tabs = () => (
  <nav>
    <TabsNavLink active as={Link} to="/browse">All levels</TabsNavLink>
    <TabsNavLink as={Link} to="/browse/junior">Junior</TabsNavLink>
    <TabsNavLink as={Link} to="/browse/regular">Regular</TabsNavLink>
    <TabsNavLink as={Link} to="/browse/senior">Senior</TabsNavLink>
  </nav>
)

export default Tabs
