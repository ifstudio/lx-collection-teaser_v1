import React, { Component } from 'react'
import Form from '../form/form'
import {Logo} from '../svg/logo'

class Main extends Component {

  componentDidMount() {

    const script1 = document.createElement('script')
    const script2 = document.createElement('script')
    const script3 = document.createElement('script')
    const script4 = document.createElement('script')
    const body = document.querySelector('body')
    
    script1.src = '/js/imagesloaded.pkgd.min.js'
    script2.src = '/js/charming.min.js'
    script3.src = '/js/anime.min.js'
    script4.src = '/js/demo4.js'

    const scripts = [script1, script2, script3, script4]
    scripts.forEach(script => {
      body.appendChild(script)
    })
    
    this.props.mainIsLoaded(true)
  }

  scrollToBottom = () => window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth"
})


  render() {
    
    return (
      <main className="main">
        <span className='logo'>
          <Logo />
          <span className='sign_up__link' onClick={this.scrollToBottom}>Sign Up</span>
        </span>
        <div className="content">
          <div className="content__section">
            <h2 className="content__text">Discerning</h2>
          </div>
          <div className="content__section">
            <a className="content__link">
              <img className="content__img" src="img/bw2.jpg" alt="img" />
            </a>
            <h2 className="content__text">Refined</h2>
          </div>
          <div className="content__section">
            <a className="content__link">
              <img className="content__img" src="img/girl.jpg" alt="img" />
            </a>
            <h2 className="content__text">Iconic</h2>
          </div>
          <div className="content__section">
            <a className="content__link">
              <img className="content__img" src="img/bg2.jpg" alt="img" />
            </a>
            <h2 className="content__text">Curated</h2>
          </div>
          <div className="content__section">
            <a className="content__link">
              <img className="content__img" src="img/bw4.jpg" alt="img" />
            </a>
            <h2 className="content__text">Elevated</h2>
          </div>
          <div className="content__section">
            <h2 className="content__text">Preferential</h2>
          </div>
          <div className="content__section">
            <a className="content__link">
              <img className="content__img" src="img/pool-guy.jpg" alt="img" />
            </a>
            <h2 className="content__text">Elegant</h2>
          </div>
          <div className="content__section">
            <a className="content__link">
              <img className="content__img" src="img/piano.jpg" alt="img" />
            </a>
            <h2 className="content__text">Cultivated</h2>
          </div>
          <div className="content__section">
            <a className="content__link">
              <img className="content__img" src="img/cross-walk.jpg" alt="img" />
            </a>
            <h2 className="content__text">Exceptional</h2>
          </div>
          <div className="content__section">
            <a className="content__link">
              <img className="content__img" src="img/rain_car.jpg" alt="img" />
            </a>
            <h2 className="content__text">Uncommon</h2>
          </div>
          <div className="content__section">
         
          </div>
          <div className="content__section">
            <Form />
          </div>
        </div>
      </main>
    )
  }
}

export default Main
