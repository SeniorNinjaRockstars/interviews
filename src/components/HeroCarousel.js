import React, { Component } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import Container from "../atoms/Container"
import Animation from "./Animation"
import AnimatedTitle from "./AnimatedTitle"
import AnimatedSVG from "./AnimatedSVG"

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

const ImageWrapper = styled.div`
  box-sizing: border-box;
  width: 50%;
  position: absolute;
  right: 0;
  top: 0;
  z-index: -1;
  padding-left: 20px;

  svg {
    width: 100%;
  }
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
    setInterval(() => this.setState(
      prevState => ({
        index: (prevState.index + 1) % itemsNum 
      })
    ), this.props.duration)
  }

  render() {
    const { children, dynamicList, duration } = this.props
    const { index } = this.state
    const { title, image } = dynamicList[index]

    return (
      <Container>
        <InnerContainer>
          <AnimatedTitle 
            as="h1"
            text={title}
            duration={duration}
            />
          <ContentWrapper>
            <Animation type="fade" delay={0.8}>
              {children}
            </Animation>
          </ContentWrapper>
          <ImageWrapper>
            <AnimatedSVG
              key={title}
              image={image}
              duration={duration}
            />
          </ImageWrapper>
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
