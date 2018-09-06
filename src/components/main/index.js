import React, { Component } from 'react'
import Form from '../form'
import {TextOnly} from './TextOnly'
import {TextAndImage} from './TextAndImage'
import { Logo } from '../svg/logo'

class Main extends Component {
  componentDidMount() {
    const uncommon = document.getElementById('uncommon')
    const signup = document.querySelector('.sign_up__link')
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
    this.scrollHandler(uncommon, signup)
  }

  scrollHandler = (uncommon, signup) => {
    const getCurrentScroll = () => window.pageYOffset || document.documentElement.scrollTop

    window.onscroll = () => {
      if (getCurrentScroll() >= 7700) {
        uncommon.style.opacity = 0
        signup.style.opacity = 0
      } else {
        signup.style.opacity = 1
      }
    }
  }

  scrollToBottom = () =>
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    })

  render() {
    const sections = [
      {
        text: 'Discerning'
      },
      {
        img: 'img/bw2.jpg',
        text: 'Refined'
      },
      {
        img: 'img/plane.jpg',
        text: 'Iconic',
      },
      {
        img: 'img/bg2.jpg',
        text: 'Curated'
      },
      {
        img: 'img/bw4.jpg',
        text: 'Elevated'
      },
      {
        text: 'Preferential'
      },
      {
        img: 'img/pool.jpg',
        text: 'Elegant'
      },
      {
        img: 'img/piano.jpg',
        text: 'Cultivated'
      },
      {
        img: 'img/rain_car.jpg',
        text: 'Uncommon'
      }
    ]

    return (
      <main className="main">
        <span className="logo">
          <Logo />
          <span className="sign_up__link" onClick={this.scrollToBottom}>
            Sign Up
          </span>
        </span>
        <div className="content">
         {
           sections.map(section => (
             section.img ? <TextAndImage {...section} /> : <TextOnly {...section} />
           ))
         }
          <div className="content__section" />
          <div className="content__section">
            <Form />
          </div>
        </div>
      </main>
    )
  }
}

export default Main