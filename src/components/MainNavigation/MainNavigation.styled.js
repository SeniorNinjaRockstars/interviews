import styled, { css } from "styled-components"

import NavLink from "../../core/NavLink"
import { List } from "../NavList/NavList.styled"

export const Nav = styled.nav`
  box-sizing: border-box;
  background: ${props => props.theme.color.background.base};
  display: flex;

  ${({ theme }) => theme.media.tablet`
    position: fixed;
    display: block;
    width: 100%;
    top: 0;
    left: 0;
    padding: 8rem 2rem 4rem;
    transform: translateY(-100%);
    z-index: 200;
    transition: transform ${props => props.theme.effects.transition.base} 0.2s;

    ${props =>
      props.isMenuOpened &&
      `
      transform: translateY(0);
      transition-delay: 0s;
    `}
  `}
  ${({ theme }) => theme.media.mobile`
    padding-left: 1rem;
    padding-right: 1rem;
  `};
`

export const NavWrapper = styled.div`
  display: flex;

  ${({ theme }) => theme.media.tablet`
    display: block;
    opacity: 0;
    transition: opacity ${theme.effects.transition.base} 0s;

    ${({ isMenuOpened }) => isMenuOpened && `
      opacity: 1;
      transition-delay: 0.2s;
    `}
  `};

  ${List} {
    ${({ theme }) => theme.media.tablet`
      display: block;
      margin-bottom: 2rem;
    `};
  }

  ${NavLink} {
    ${({ theme }) => theme.media.tablet`
      font-size: ${theme.font.size.heading.tertiary};
      color: ${theme.color.text.primary};
      margin: 0 0 0.5rem;
    `};
  }
`;

export const NavOverlay = styled.div`
  background: ${({ theme }) => theme.color.background.dark};
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  opacity: 0;
  transition: opacity ${({ theme }) => theme.effects.transition.base},
    visibility ${({ theme }) => theme.effects.transition.none} 0.4s;
  visibility: hidden;
  z-index: 100;

  ${({ isVisible }) =>
    isVisible &&
    css`
      opacity: 0.5;
      visibility: visible;
      transition: opacity ${({ theme }) => theme.effects.transition.base},
        visibility ${({ theme }) => theme.effects.transition.none} 0s;
    `};
`
