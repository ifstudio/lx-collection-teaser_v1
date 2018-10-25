import React, {
  Component
} from 'react'
import Form from '../form'
import {
  TextOnly
} from './TextOnly'
import {
  TextAndImage
} from './TextAndImage'
import {
  Logo
} from '../svg/logo'
import {
  sections
} from './sections'
import {
  BROWSER
} from '../../utils/browser'
import Entry from './entry'


const sum = (a, b) => a + b

class Main extends Component {
  componentDidMount() {
    const uncommon = document.getElementById('uncommon')
    const sections = Array.from(document.querySelectorAll('.content__section'))
    const signup = document.querySelector('.sign_up__link')

    let observer
    let current = -1
    let allentries = []

    if (!('IntersectionObserver' in window)) {
      alert('No intersection observer')
    }
    // console.log(window)
    // alert(window.IntersectionObserver)
    // Need to find a fix on mobile
    if ('IntersectionObserver' in window) {
      document.body.classList.add('ioapi')

      observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.intersectionRatio > 0.5) {
              const newcurrent = sections.indexOf(entry.target)
              if (newcurrent === current) return
              const direction = newcurrent > current
              if (current >= 0) {
                allentries[current].exit(direction ? 'down' : 'up')
              }
              allentries[newcurrent].enter(direction ? 'down' : 'up')
              current = newcurrent
            }
          })
        }, {
          threshold: 0.5
        }
      )

      sections.forEach(section => allentries.push(new Entry(section, observer)))
    }
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
    return ( <
      main className = "main" >
      <
      span className = "logo" >
      <
      Logo / >
      <
      span className = "sign_up__link"
      onClick = {
        this.scrollToBottom
      } >
      Sign Up <
      /span> < /
      span > <
      div className = "content" > {
        sections.map(
          section =>
          section.img ? ( <
            TextAndImage { ...section
            }
            />
          ) : ( <
            TextOnly { ...section
            }
            />
          )
        )
      } <
      div className = "content__section" / >
      <
      div className = "content__section" >
      <
      Form / >
      <
      /div> < /
      div > <
      /main>
    )
  }
}

export default Main