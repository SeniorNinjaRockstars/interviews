import React, { Component } from 'react'
import styled, { css } from 'styled-components'

const Wrapper = styled.div`
  overflow: hidden;
  display: block;
`

const Reveal = styled.div`
  display: inline-block;
  transform: translate(0%, 120%);
  transition: transform ${({ theme }) => theme.effects.transition.base};
  transition-delay: ${({ delay }) => delay}s;

  ${({ initialized }) => initialized && css`
    transform: translate(0, 0);
  `}
`

const Fade = styled.div`
  opacity: 0;
  transition: opacity ${({ theme }) => theme.effects.transition.base};
  transition-delay: ${({ delay }) => delay}s;

  ${({ initialized }) => initialized && css`
    opacity: 1;
  `}
`

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
      <Wrapper>
        <Element
          type={type}
          initialized={this.state.initialized}
          delay={delay}
        >
          {this.props.children}
        </Element>
      </Wrapper>
    )
  }
}

export default Animation