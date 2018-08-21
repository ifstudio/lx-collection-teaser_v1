import React, { Component } from 'react'
import IntroSVG from './components/introSVG'
import Main from './components/main'
import IntroText from './components/introText'

import './App.css'
const mojs = require('mo-js')

class App extends Component {
  constructor() {
    super()
    this.state = {
      fireIntro: false,
      introIsRemoved: false
    }
  }
  componentDidMount() {
    const burst = new mojs.Burst({
      left: 0,
      top: 0,
      radius: { 0: 100 },
      count: 10,
      children: {
        shape: 'circle',
        radius: 5,
        fill: ['#FFDD1B', '#bb1515', '#fff'],
        strokeWidth: 1,
        duration: 2000
      }
    })

    document.addEventListener('click', function(e) {
      burst
        .tune({ x: e.pageX, y: e.pageY })
        .setSpeed(3)
        .replay()
    })
  }

  svgAnimationIsOver = (isOver) => {
    if (isOver) {
      const introEl = document.querySelector('.intro_animation')
      introEl.classList.add('animated', 'fadeOut')
      introEl.style.display = 'none'

      this.setState(
        {
          introIsRemoved: true
        }
      )
    }
  }

  fireIntro = mainIsLoaded => {
    if (mainIsLoaded) {
      this.setState({
        fireIntro: true
      })
    }
  }

  introTextAnimationCompleted = (el) => el.style.display = 'none'

  render() {
    const { introIsRemoved, fireIntro } = this.state
    const conditionalText = introIsRemoved ? <IntroText endAnimation={this.introTextAnimationCompleted} /> : null
    const conditionalIntro = fireIntro ? <IntroSVG fireIntro={fireIntro} animationIsOver={this.svgAnimationIsOver} /> : null

    return (
      <div className="App">
        {conditionalIntro}
        {conditionalText}
        <Main mainIsLoaded={this.fireIntro} />
      </div>
    )
  }
}

export default App
