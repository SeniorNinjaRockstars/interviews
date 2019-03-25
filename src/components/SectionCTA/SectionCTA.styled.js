import styled from "styled-components";

import Heading from "../../core/Heading"

export const SectionWrapper = styled.section`
  padding: 4rem 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  ${({ theme }) => theme.media.mobile`
    display: block;
  `}
`

export const HeadingCTA = styled(Heading)`
  font-size: ${({ theme }) => theme.font.size.heading.base};
  margin: 0 0 1em;
`;
