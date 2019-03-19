import styled from "styled-components"

const NavLink = styled.a`
  display: inline-block;
  text-decoration: none;
  color: ${({ theme }) => theme.color.text.tertiary};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  transition: color ${({ theme }) => theme.effects.transition.quick};
  
  &:hover {
    color: ${({ theme }) => theme.color.text.primary};
  }
`

export default NavLink
