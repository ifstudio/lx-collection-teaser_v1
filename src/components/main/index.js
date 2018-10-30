import React, { Component } from 'react'
import Form from '../form'
import { TextOnly } from './TextOnly'
import { TextAndImage } from './TextAndImage'
import { Logo } from '../logo'
import { sections } from './sections'
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

    if ('IntersectionObserver' in window) {
      document.body.classList.add('ioapi')

      observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.intersectionRatio > 0.5) {
              const newcurrent = sections.indexOf(entry.target)
              if (newcurrent === current) return
              if (newcurrent === 8) {
                signup.style.opacity = 0
              } else {
                signup.style.opacity = 1
              }
              const direction = newcurrent > current
              if (current >= 0) {
                allentries[current].exit(direction ? 'down' : 'up')
              }
              allentries[newcurrent].enter(direction ? 'down' : 'up')
              current = newcurrent
            }
          })
        },
        {
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
    this.scrollHandler(uncommon, distanceToScroll)
  }

  scrollHandler = (uncommon, distanceToScroll) => {
    const getCurrentScroll = () =>
      window.pageYOffset || document.documentElement.scrollTop

    window.onscroll = () => {
      if (getCurrentScroll() >= distanceToScroll) {
        uncommon.style.opacity = 0
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
        <Logo scrollToBottom={this.scrollToBottom} />
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
          <Form />
        </div>
      </main>
    )
  }
}

export default Main
