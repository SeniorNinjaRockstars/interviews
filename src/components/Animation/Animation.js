import React, { Component } from 'react'

import { AnimationWrapper, Reveal, Fade } from "./Animation.styled"

class Animation extends Component {
  constructor(props) {
    super(props)

    this.state = {
      initialized: false,
    }
  }

  componentDidMount() {
    this.setState({ initialized: true })
  }
  
  render() {
    const { delay, type } = this.props
    const Element = type === "reveal" ? Reveal : Fade

    return (
      <AnimationWrapper>
        <Element
          type={type}
          initialized={this.state.initialized}
          delay={delay}
        >
          {this.props.children}
        </Element>
      </AnimationWrapper>
    )
  }
}

export default Animation