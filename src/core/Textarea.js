import styled, { css } from "styled-components"

const Textarea = styled.textarea`
  font-family: inherit;
  font-size: inherit;
  box-sizing: border-box;
  width: 100%;
  background: ${({ theme }) => theme.color.background.secondary};
  border-radius: ${({ theme }) => theme.size.borderRadius};
  border: ${({ theme }) => theme.size.border.base} solid ${({ theme }) => theme.color.elements.border};
  padding: 10px 20px;
  color: ${({ theme }) => theme.color.text.primary};

  &:focus {
    outline: 0;
    box-shadow: ${({ theme }) => theme.effects.outline.base};
  }
  
  ${({ theme, error }) => error && css`
    box-shadow: ${({ theme }) => theme.effects.outline.error};
  `}
`

export default Textarea
