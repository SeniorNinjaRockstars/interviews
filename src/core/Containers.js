import styled from "styled-components"

export const Container = styled.div`
  padding: 0 2rem;

  ${({ fullWidth }) =>
    fullWidth ? "width: 100%;" : "max-width: 1200px; margin: 0 auto;"}

  ${({ theme }) => theme.media.mobile`
    padding-left: 1rem;
    padding-right: 1rem;
  `};
`

export const InnerContainer = styled.div`
  margin: 25vh 16.667% 35vh;
  position: relative;

  ${({ theme }) => theme.media.tablet`
    margin-left: 0;
    margin-right: 0;
  `}

  ${({ theme }) => theme.media.mobile`
    margin-top: 25vh;
  `}
`
