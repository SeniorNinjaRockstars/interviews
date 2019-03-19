import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const ButtonWrapper = styled.button`
  display: none;
  background: none;
  border: 0;
  cursor: pointer;
  height: 40px;
  margin-left: auto;
  right: 0;
  padding: 10px;
  width: 40px;
  position: relative;
  z-index: 300;

  &:focus,
  &:active {
    outline: 0;
  }

  ${({ theme }) => theme.media.tablet`
    display: flex;
  `};
`;

const HamburgerMenuIcon = styled.span`
  &,
  &::before,
  &::after {
    background: ${({ theme }) => theme.color.elements.menu};
    content: "";
    position: relative;
    display: block;
    height: 2px;
    transition: transform ${({ theme }) => theme.effects.transition.quick},
      background-color 0s ease-out 0.2s,
      top ${({ theme }) => theme.effects.transition.quick} 0.3s;
    width: 30px;
  }

  &::before {
    top: 8px;
  }

  &::after {
    top: -10px;
  }

  ${({ theme, isMenuOpened })  =>
    isMenuOpened &&
    `
    &,
    &::before,
    &::after {
      transition: top ${theme.effects.transition.quick},
        background-color 0s ease-out 0.2s,
        transform ${theme.effects.transition.quick} 0.3s;
    }

    & {
      background: transparent;

      &::before {
        top: 0;
        transform: rotate(45deg);
      }
  
      &::after {
        top: -2px;
        transform: rotate(-45deg);
      }
    }
  `};
`

const MenuButton = ({ onClick, isMenuOpened }) => (
  <ButtonWrapper onClick={onClick}>
    <HamburgerMenuIcon isMenuOpened={isMenuOpened} />
  </ButtonWrapper>
)

MenuButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  isMenuOpened: PropTypes.bool.isRequired,
}

export default MenuButton
