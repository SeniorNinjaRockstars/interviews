import styled from "styled-components"

const Label = styled.label`
  display: block;
  font-weight: ${({ theme }) => theme.font.weight.bold};
  font-size: ${({ theme }) => theme.font.size.label.tertiary};
  color: ${({ theme }) => theme.color.text.tertiary};
  margin: 0 0 0.5em;
`

export default Label
