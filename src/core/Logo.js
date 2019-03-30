import styled from "styled-components"

import LogoSVG from "../images/logo.svg"

const Logo = styled(LogoSVG)`
  width: 90px;

  .cls-1 {
    fill: ${({ light, dark }) => (light && "#fff") || (dark && "#222")}
  }
`

export default Logo
