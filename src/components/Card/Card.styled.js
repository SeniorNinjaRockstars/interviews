import styled from "styled-components"

export const CardWrapper = styled.div`
  border-radius: ${({ theme }) => theme.size.borderRadius};
  border: ${({ theme }) => theme.size.border.base} solid ${({ theme }) => theme.color.elements.border};
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  > *:first-child {
    margin-top: 0;
  }

  > *:last-child {
    margin-bottom: 0;
  }
`

export const MainText = styled.p`
  color: ${({ theme }) => theme.color.text.primary};
  font-size: ${({ theme }) => theme.font.size.label.secondary};
  line-height: ${({ theme }) => theme.font.lineHeight.medium};
  margin-bottom: 1em;
`
  
export const InfoBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`
  
export const LabeledInfo = styled.div`
  margin: 1rem 2rem 0 0;
`
  
export const Info = styled.p`
  margin: 0;
`
