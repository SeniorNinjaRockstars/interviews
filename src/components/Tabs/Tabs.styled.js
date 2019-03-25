import styled, { css } from "styled-components"

import NavLink from "../../core/NavLink"

export const TabsNavLink = styled(NavLink)`
  margin-right: 2rem;
  padding: 2rem 0;
  border-bottom: ${({ theme }) => theme.size.border.base} solid transparent;

  ${({ active, theme }) => active && css`
    color: ${theme.color.text.primary};
    border-bottom-color: ${theme.color.accent.primary};
  `}
`
