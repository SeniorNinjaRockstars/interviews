import React, { Component } from "react"
import ReactDOM from "react-dom"
import PropTypes from "prop-types"
import { TweenMax } from "gsap/TweenMax"

class AnimatedSVG extends Component {
  constructor(props) {
    super(props)
    
    this.all = this.all.bind(this)
    this.pathIn = this.pathIn.bind(this)
    this.pathOut = this.pathOut.bind(this)
  }

  all(func) {
    this.paths.forEach((...args) => func(...args))
  }

  pathOut(path, i) {
    setTimeout(() => {
      TweenMax.to(path, 1, { strokeDashoffset: -path._len })
    }, 20 * i)
  }

  pathIn(path, i) {
    setTimeout(() => {
      TweenMax.to(path, 1, { strokeDashoffset: 0 })
    }, 20 * i)
  }

  componentDidMount() {
    const paths = ReactDOM.findDOMNode(this)
      .getElementsByTagName('path')
    this.paths = Array.from(paths)
    
    this.all((path, i) => {
      const len = Math.ceil(path.getTotalLength());
      path._len = len;
      path.style.strokeDasharray = len;
      path.style.strokeDashoffset = len;
    });
    
    this.paths = this.paths.reverse();
    
    const duration = this.props.duration - 40 * this.paths.length
    this.all(this.pathIn)
    setTimeout(() => this.all(this.pathOut), duration)
  }

  render() {
    const { image: Comp } = this.props;

    return (
      <Comp />
    )
  }
}

AnimatedSVG.propTypes = {
  image: PropTypes.node.isRequired,
}

export default AnimatedSVG
