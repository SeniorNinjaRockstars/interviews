import styled from "styled-components"

export const ContentWrapper = styled.div`
  width: 50%;
  padding-right: 20px;
  transition: all ${({ theme }) => theme.effects.transition.quick};

  p {
    margin-bottom: 2rem;
  }

  ${({ theme }) => theme.media.mobile`
    width: 100%;
    padding-right: 0;
  `}
`

export const ImageWrapper = styled.div`
  box-sizing: border-box;
  width: 50%;
  position: absolute;
  right: 0;
  top: 0;
  z-index: -1;
  padding-left: 20px;
  transform: translateY(-10%);

  svg {
    width: 100%;
  }

  ${({ theme }) => theme.media.tablet`
    transform: translateY(-20%);
  `}

  ${({ theme }) => theme.media.mobile`
    padding: 0;
    width: 70%;
    transform: translate(20%, -45%);
  `}
`
