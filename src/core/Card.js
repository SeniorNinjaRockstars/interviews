import styled, { css } from "styled-components"

export const Card = styled.div`
  border-radius: ${({ theme }) => theme.size.borderRadius};
  border: ${({ theme }) => theme.size.border.base} solid ${({ theme }) => theme.color.elements.border};
  padding: 2rem;
  
  > *:first-child {
    margin-top: 0;
  }

  > *:last-child {
    margin-bottom: 0;
  }

  ${({ secondary, theme }) => secondary && css`
    background: ${theme.color.accent.secondary};
    border: 0;
  `}

  ${({ primary, theme }) => primary && css`
    background: ${theme.color.accent.primary};
    border: 0;
  `}
`

export default Card
