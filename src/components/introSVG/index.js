import React, { Component } from 'react'
import anime from 'animejs'
import SVG from './SVG'

export default class IntroSVG extends Component {
  componentDidMount () {
    const lineDrawing = anime({
      targets: '.anim .lines path',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 1500,
      delay: function (el, i) {
        return i * 250
      },
      direction: 'alternate',
      loop: 2
    })

    lineDrawing.complete = () => this.props.animationIsOver(true)
  }
  render () {
    return (
      <div className='intro_animation'>
        <div className='anim'>
          <SVG />
        </div>
      </div>
    )
  }
}
