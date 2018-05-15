import React, { Component } from 'react'
import Intro from './components/intro/intro'
import Main from './components/main/main'
import './App.css'

class App extends Component {
  componentDidMount() {
    const script1 = document.createElement('script')
    const script2 = document.createElement('script')
    const script3 = document.createElement('script')
    const script4 = document.createElement('script')
    const body = document.querySelector('body')
    const app = document.querySelector('.App')
    
    script1.src='/js/imagesloaded.pkgd.min.js'
    script2.src='/js/charming.min.js'
    script3.src='/js/anime.min.js'
    script4.src='/js/demo4.js'

    const scripts = [script1, script2, script3, script4]

    scripts.forEach((script) => {
      body.appendChild(script)
    })
    app.classList.remove('loading')
  }

  render() {
    return (
      <div className="App">
      <Intro />
      <Main />
      </div>
    )
  }
}

export default App


