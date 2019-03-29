import styled from "styled-components"

const QuickLink = styled.a`
  box-sizing: border-box;
  cursor: pointer;
  display: inline-block;
  background: transparent;
  font-weight: ${({ theme }) => theme.font.weight.bold};
  font-size: ${({ theme }) => theme.font.size.label.base};
  color: ${({ theme }) => theme.color.text.primary};
  text-decoration: none;
  position: relative;

  &::after {
    display: block;
    content: "\\203A";
    position: absolute;
    top: 2px;
    right: -1rem;
    font-size: 24px;
    line-height: 16px;
    transition: ${({ theme }) => theme.effects.transition.quick};
  }

  &:hover::after {
    transform: translate(0.5rem);
  }
`

export default QuickLink
