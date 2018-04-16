import React, { Component } from 'react'
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
        <main>
          <div className="content">
            <div className="content__section">
              <h2 className="content__text">LX Collection</h2>
            </div>
            <div className="content__section">
              <a className="content__link">
                <img className="content__img" src="img/bw1.jpg" alt="img" />
              </a>
              <h2 className="content__text">Featured Cities</h2>
            </div>
            <div className="content__section">
              <a className="content__link">
                <img className="content__img" src="img/bw2.jpg" alt="img" />
              </a>
              <h2 className="content__text">Design Awards</h2>
            </div>
            <div className="content__section">
              <a className="content__link">
                <img className="content__img" src="img/bw3.jpg" alt="img" />
              </a>
              <h2 className="content__text">News</h2>
            </div>
            <div className="content__section">
              <a className="content__link">
                <img className="content__img" src="img/bw4.jpg" alt="img" />
              </a>
              <h2 className="content__text">Contact</h2>
            </div>
          </div>
        </main>
      </div>
    )
  }
}

export default App
