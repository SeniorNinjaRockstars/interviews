import React, { Component } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import Container from "../atoms/Container"
import Heading from "../atoms/Heading"

const InnerContainer = styled.div`
  margin: 120px 16.667%;
  position: relative;

  ${({ theme }) => theme.media.tablet`
    margin: 80px 0;
  `}
`

const ContentWrapper = styled.div`
  width: 50%;
  padding-right: 20px;
  
  p {
    margin-bottom: 2rem;
  }
`

const PageTitle = styled(Heading)`
  font-size: ${({ theme }) => theme.font.size.heading.primary};
  margin: 0 0 2rem;
`

const Image = styled.img`
  width: 50%;
  position: absolute;
  right: 0;
  top: 0;
  z-index: -1;
`

class HeroCarousel extends Component {
  constructor(props) {
    super(props)

    this.state = {
      index: 0,
    }
  }

  componentDidMount() {
    const itemsNum = this.props.dynamicList.length
    setInterval(() => this.setState({
      index: (this.state.index + 1) % itemsNum 
    }), 8000)
  }

  render() {
    const { children, dynamicList } = this.props
    const { index } = this.state
    const { title, image } = dynamicList[index]

    return (
      <Container>
        <InnerContainer>
          <PageTitle>{title}</PageTitle>
          <ContentWrapper>
            {children}
          </ContentWrapper>
          <Image src={image} />
        </InnerContainer>
      </Container>
    )
  }
}
  
HeroCarousel.defaultProps = {
  children: null,
  dynamicList: [],
}

HeroCarousel.propTypes = {
  children: PropTypes.node,
  dynamicList: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
  })),
}

export default HeroCarousel
