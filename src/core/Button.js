import styled, { css } from "styled-components"

const Button = styled.button`
  box-sizing: border-box;
  cursor: pointer;
  display: inline-block;
  background: transparent;
  text-transform: uppercase;
  border-radius: 100px;
  border: ${({ theme }) => theme.size.border.base} solid ${({ theme }) => theme.color.accent.primary};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  font-size: ${({ theme }) => theme.font.size.label.base};
  line-height: ${({ theme }) => theme.font.lineHeight.tiny};
  color: ${({ theme }) => theme.color.text.primary};
  max-width: 12em;
  min-width: 6em;
  padding: 0.75rem 2rem;
  transition: 
    background ${({ theme }) => theme.effects.transition.quick};
  text-align: center;
  text-decoration: none;

  &:hover {
    background: ${({ theme }) => theme.color.accent.primary};
  }

  ${({ theme }) => theme.media.mobile`
    font-size: ${theme.font.size.label.secondary};
  `};

  ${({ primary, theme }) =>
    primary &&
    css`
      max-width: 20em;
      min-width: 8em;
      padding: 1rem 2.5rem;

      ${theme.media.mobile`
        font-size: ${theme.font.size.label.secondary};
        padding: 1rem 2rem;
      `};
    `}

  ${({ fullWidth }) =>
    fullWidth &&
    css`
      max-width: none;
      min-width: none;
      width: 100%;
    `}
`

export default Button
