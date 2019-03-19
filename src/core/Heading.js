import styled from "styled-components";

const Heading = styled.h1`
  font-size: ${({ theme }) => theme.font.size.heading.secondary};
  color: ${({ theme }) => theme.color.text.primary};
  font-weight: ${({ theme }) => theme.font.weight.extraBold};
  line-height: ${({ theme }) => theme.font.lineHeight.tiny};
`;

export default Heading;