import React, { Component } from "react"
import PropTypes from "prop-types"

import { Container } from "../../core/Containers"
import { InnerContainer } from "../../core/Containers"
import Animation from "../Animation"
import AnimatedTitle from "../AnimatedTitle"
import AnimatedSVG from "../AnimatedSVG"

import { ContentWrapper, ImageWrapper } from './HeroCarousel.styled'

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
            key={title}
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
    image: PropTypes.node.isRequired,
  })),
}

export default HeroCarousel
