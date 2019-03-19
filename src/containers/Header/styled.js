import styled from "styled-components";

export const HeaderWrapper = styled.header`
  padding: 2rem 0;
  
  ${({ theme }) => theme.media.mobile`
    padding: 1rem 0;
  `}
`

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;

  a {
    flex: 1;
  }

  nav {
    flex: 5;
  }
`