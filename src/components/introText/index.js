import React, { Component } from 'react'

export default class IntroText extends Component {
  componentDidMount () {
    const intro = document.getElementById('IntroText')
    setTimeout(() => {
      document.querySelector('.mast').classList.add('animation_finished')
    }, 5500)

    setTimeout(() => {
      this.props.endAnimation(intro)
    }, 6500)
  }

  render () {
    return (
      <main id='IntroText'>
        <section className='mast'>
          <header className='mast__header'>
            <h1 className='mast__title js-spanize'>
              <span>LX</span> <span>Collection</span> <span>Presents</span>
            </h1>
            <br />
            <hr className='sep' />
            <br />
            <p className='mast__text js-spanize'>
              <span>A</span> <span>highly</span> <span>curated</span> <span>collection</span> <br /> <span>of</span>
              <span>the</span> <span>most</span> <span>prestigious</span> <span>condominiums</span> <span>and</span> <span>architecture</span>
              <br />  <span>in</span> <span>the</span> <span>world</span>
            </p>
          </header>
        </section>
      </main>
    )
  }
}
