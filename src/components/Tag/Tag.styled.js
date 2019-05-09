import styled from "styled-components"

export const TagWrapper = styled.span`
  box-sizing: border-box;
  text-decoration: none;
  display: inline-block;
  background: ${({ name, theme }) => theme.color.context[name]};
  border-radius: 100px;
  font-size: ${({ theme }) => theme.font.size.label.tertiary};
  color: ${({ theme }) => theme.color.text.primary};
  padding: 0.1rem 1rem;
  text-align: center;
  transition: opacity ${({ theme }) => theme.effects.transition.quick};

  &:hover {
    opacity: ${({ theme }) => theme.effects.hover};
  }
`
