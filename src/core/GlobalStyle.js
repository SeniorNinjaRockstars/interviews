import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Nunito+Sans:400,700,800');

  body {
    font-family: ${({ theme }) => theme.font.family};
    font-size: ${({ theme }) => theme.font.size.base};
    font-weight: ${({ theme }) => theme.font.weight.base};
    color: ${({ theme }) => theme.color.text.base};
    background: ${({ theme }) => theme.color.background.base};
    margin: 0;
    overflow-x: hidden;
    width: 100%;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${({ theme }) => theme.color.text.primary};
    font-weight: ${({ theme }) => theme.font.weight.bold};
  }

  p {
    color: ${({ theme }) => theme.color.text.base};
    line-height: ${({ theme }) => theme.font.lineHeight.large};
    margin: 1em 0 1.5em;
  }
  
  li {
    line-height: ${({ theme }) => theme.font.lineHeight.medium};
  }
`

export default GlobalStyle
