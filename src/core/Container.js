import styled from "styled-components"

const Container = styled.div`
  padding: 0 2rem;

  ${({ fullWidth }) =>
    fullWidth ? "width: 100%;" : "max-width: 1200px; margin: 0 auto;"}

  ${({ theme }) => theme.media.mobile`
    padding-left: 1rem;
    padding-right: 1rem;
  `};
`

export default Container
