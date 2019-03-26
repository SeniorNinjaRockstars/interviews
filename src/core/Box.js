import styled, { css } from "styled-components"

const Box = styled.div`
  padding: 3rem 0;
  
  ${({ light, theme }) => light && css`
    background: ${theme.color.background.secondary};
  `};
`

export default Box
