
import styled from "styled-components"

import Heading from "../../core/Heading"

export const Title = styled(Heading)`
  font-size: ${({ theme }) => theme.font.size.heading.primary};
  margin: 0 0 2rem;
  display: flex;
  flex-wrap: wrap;
`

export const RevealWrapper = styled.span`
  overflow: hidden;
  display: block;
  margin-right: 0.27em;
`

export const Reveal = styled.span`
  display: inline-block;
  transform: translate(0%, 120%);
  animation: reveal ${({ duration }) => duration}ms ease-in-out;

  @keyframes reveal {
    0% {
      transform: translate(0%, 120%);
    }
    15% {
      transform: translate(0, 0);
    }
    85% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(0%, 120%);
    }
  }
`
