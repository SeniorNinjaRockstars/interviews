import React from "react"
import { Link } from "gatsby"

import { TabsNavLink } from "./Tabs.styled"

const Tabs = () => {
  
  //TODO: Change it
  let category = ""
  if(window.location.pathname.split('browse/')[1]) {
    category = window.location.pathname.split('browse/')[1].split('/')[0];
  } else {
    return "";
  }

  //TODO: Change it
  let activeTag = 0;
  if(window.location.pathname.includes('junior')) {
    activeTag = 1;
  } else if(window.location.pathname.includes('regular')) {
    activeTag = 2;
  } else if(window.location.pathname.includes('senior')) {
    activeTag = 3;
  }

  return (
    <nav>
      <TabsNavLink active={activeTag === 0} as={Link} to={`/browse/${category}`}>
        All levels
      </TabsNavLink>
      <TabsNavLink active={activeTag === 1} as={Link} to={`/browse/${category}/junior`}>
        Junior
      </TabsNavLink>
      <TabsNavLink active={activeTag === 2} as={Link} to={`/browse/${category}/regular`}>
        Regular
      </TabsNavLink>
      <TabsNavLink active={activeTag === 3} as={Link} to={`/browse/${category}/senior`}>
        Senior
      </TabsNavLink>
    </nav>
  )
}

export default Tabs
