import React, { Component } from 'react'
import Form from '../form'
import { TextOnly } from './TextOnly'
import { TextAndImage } from './TextAndImage'
import { Logo } from '../svg/logo'
import { sections } from './sections'
import { BROWSER } from '../../browser'

const sum = (a, b) => a + b

class Main extends Component {
  componentDidMount() {
    const uncommon = document.getElementById('uncommon')
    const sections = Array.from(document.querySelectorAll('.content__section'))
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
    sections.length = sections.length - 1
    const distanceToScroll = sections
      .map(section => section.offsetHeight)
      .reduce(sum)

    this.props.mainIsLoaded(true)
    this.scrollHandler(uncommon, distanceToScroll, signup)
  }

  scrollHandler = (uncommon, distanceToScroll, signup) => {
    const getCurrentScroll = () =>
      window.pageYOffset || document.documentElement.scrollTop

    window.onscroll = () => {
      console.log('distanceToScroll', distanceToScroll)
      if (getCurrentScroll() >= distanceToScroll) {
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
    return (
      <main className="main">
        <span className="logo">
          <Logo />
          <span className="sign_up__link" onClick={this.scrollToBottom}>
            Sign Up
          </span>
        </span>
        <div className="content">
          {sections.map(
            section =>
              section.img ? (
                <TextAndImage {...section} />
              ) : (
                <TextOnly {...section} />
              )
          )}
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
