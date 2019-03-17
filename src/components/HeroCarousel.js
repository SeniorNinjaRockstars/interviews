import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";

import Container from "../atoms/Container"
import Heading from "../atoms/Heading"

const InnerContainer = styled.div`
  margin: 100px 16.667%;

  ${({ theme }) => theme.media.tablet`
    margin: 80px 0;
  `}
`

const ContentWrapper = styled.div`
  width: 50%;
  padding-right: 20px;
  
  p {
    margin-bottom: 3rem;
  }
`

const PageTitle = styled(Heading)`
  font-size: ${({ theme }) => theme.font.size.heading.primary};
  margin: 0 0 2rem;
`;

const HeroCarousel = ({ children, dynamicList }) => {
  const currentTitle = "How well do you know your JavaScript?";

  return (
    <Container>
      <InnerContainer>
        <PageTitle>{currentTitle}</PageTitle>
        <ContentWrapper>
          {children}
        </ContentWrapper>
      </InnerContainer>
    </Container>
  )
}
  
HeroCarousel.defaultProps = {
  children: null,
  dynamicList: [],
}

HeroCarousel.propTypes = {
  children: PropTypes.node,
  dynamicList: PropTypes.array,
}

export default HeroCarousel
