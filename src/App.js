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
  componentDidMount() {
   
  }

  removeIntro = (isOver) => {
    if ( isOver ) {
     const introEl = document.querySelector('.intro')
     introEl.classList.add('animated', 'fadeOut')
     setTimeout(() => {
      this.setState({
        introIsRemoved: true
      })
     }, 2000)
     this.handleTextIntro()
    }
  }

  fireIntro = (mainIsLoaded) => {
    if ( mainIsLoaded ) {
      this.setState({
        fireIntro: true
      })
    }
  }

  handleTextIntro = () => {
    setTimeout(() => {
      const text = document.querySelector('.textIntro')
      console.log(text)
      if(text) {
        text.classList.remove('fadeIn')
        text.classList.add('fadeOut')
      }
    }, 5000)
  }

  render() {
    const { introIsRemoved, fireIntro } = this.state
    const conditionalText = this.state.introIsRemoved ? <TextIntro /> : null
    const conditionalIntro = this.state.fireIntro ? <Intro fireIntro={fireIntro} animationIsOver={this.removeIntro} /> : null 

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


