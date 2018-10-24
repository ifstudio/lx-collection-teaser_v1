import React, { Component } from 'react'
import { ArrowDown } from '../ArrowDown'

export default class IntroText extends Component {
  componentDidMount () {
    const intro = document.getElementById('IntroText')

    setTimeout(() => {
      document.querySelector('.mast').classList.add('animation_finished')
      document.querySelector('.arrow_down').style.display = 'none'
    }, 6500)

    setTimeout(() => {
      this.props.endAnimation(intro)
    }, 7500)
  }

  render () {
    return (
      <main id='IntroText'>
        <section className='mast'>
          <header className='mast__header'>
            <h1 className='mast__title js-spanize'>
              <span> LX </span> <span>Collection</span> <span> Presents </span>
            </h1>
            <br />
            <hr className='sep' />
            <br />
            <p className='mast__text js-spanize'>
              <span> A </span> <span>highly</span> <span> curated </span>
              <span> collection </span> <br /> <span> of </span>
              <span> the </span> <span>most</span> <span> prestigious </span>
              <span> condominiums </span> <span>and</span>
              <span> architecture </span> <br /> <span> in </span>
              <span>the</span> <span> world </span>
            </p>
          </header>
          <ArrowDown />
        </section>
      </main>
    )
  }
}
