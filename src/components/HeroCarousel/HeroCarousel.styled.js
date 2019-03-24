import styled from "styled-components"

export const InnerContainer = styled.div`
  margin: 120px 16.667%;
  position: relative;

  ${({ theme }) => theme.media.tablet`
    margin: 80px 0;
  `}
`

export const ContentWrapper = styled.div`
  width: 50%;
  padding-right: 20px;
  
  p {
    margin-bottom: 2rem;
  }
`

export const ImageWrapper = styled.div`
  box-sizing: border-box;
  width: 50%;
  position: absolute;
  right: 0;
  top: 0;
  z-index: -1;
  padding-left: 20px;

  svg {
    width: 100%;
  }
`
