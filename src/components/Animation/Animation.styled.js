
import styled, { css } from "styled-components"

export const AnimationWrapper = styled.div`
  overflow: hidden;
  display: block;
`

export const Reveal = styled.div`
  display: inline-block;
  transform: translate(0%, 120%);
  transition: transform ${({ theme }) => theme.effects.transition.base};
  transition-delay: ${({ delay }) => delay}s;

  ${({ initialized }) => initialized && css`
    transform: translate(0, 0);
  `}
`

export const Fade = styled.div`
  opacity: 0;
  transition: opacity ${({ theme }) => theme.effects.transition.base};
  transition-delay: ${({ delay }) => delay}s;

  ${({ initialized }) => initialized && css`
    opacity: 1;
  `}
`
