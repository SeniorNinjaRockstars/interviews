import styled from "styled-components"

import Card from "../../core/Card"

export const CardWrapper = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

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
