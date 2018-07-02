import React, { Component } from 'react'
import Intro from './components/intro/intro'
import Main from './components/main/main'
import TextIntro from './components/textIntro/textIntro'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      fireIntro: false,
      introIsRemoved: false
    }
  }
  componentDidMount() {}

  removeIntro = isOver => {
    if (isOver) {
      const introEl = document.querySelector('.intro')
      introEl.classList.add('animated', 'fadeOut')

      this.setState(
        {
          introIsRemoved: true
        },
        () => {
          this.handleTextIntro()
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

  handleTextIntro = () => {
    setTimeout(() => {
      const text = document.querySelector('.textIntro__container')
      const intro = document.querySelector('.intro')
      console.log(text)
      if (text) {
        text.classList.remove('fadeIn')
        text.classList.add('fadeOut')
        text.style.display = 'none'
        intro.style.display = 'none'
      }
    }, 5000)
  }

  render() {
    const { introIsRemoved, fireIntro } = this.state
    const conditionalText = introIsRemoved ? <TextIntro /> : null
    const conditionalIntro = fireIntro ? <Intro fireIntro={fireIntro} animationIsOver={this.removeIntro} /> : null

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
