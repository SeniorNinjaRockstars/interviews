import styled, { css } from "styled-components"

export const styles = css`
  pre {
    background: ${({ theme }) => theme.color.elements.highlight};
    padding: 10px 20px;
    margin: 0 0 0.5rem;
    border-radius: 12px;
  }

  blockquote {
    margin: 0.5em 0;
    padding-left: 1.5em;
    border-left: ${({ theme }) => theme.size.border.base} solid ${({ theme }) => theme.color.elements.border};

    p {
      color: ${({ theme }) => theme.color.text.secondary};
    }
  }

  p {
    color: ${({ theme }) => theme.color.text.primary};
    line-height: ${({ theme }) => theme.font.lineHeight.medium};
    margin: 0 0 0.5em;
  }

  ul {
    margin: 0 0 0.5em;
    color: ${({ theme }) => theme.color.text.primary};
  }
`

export default styled.div`
  ${styles}
`
