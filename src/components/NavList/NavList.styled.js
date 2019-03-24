import styled from "styled-components"

import NavLink from "../../core/NavLink";

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
`

export const ListLink = styled(NavLink)`
  margin-right: 3rem;
`
