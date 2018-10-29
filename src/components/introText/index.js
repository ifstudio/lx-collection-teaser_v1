import React, { Component } from 'react'
import SpanText from './SpanText'

export default class IntroText extends Component {
  componentDidMount() {
    const intro = document.getElementById('IntroText')
    setTimeout(() => {
      document.querySelector('.mast').classList.add('animation_finished')
    }, 6500)
    setTimeout(() => {
      this.props.endAnimation(intro)
    }, 7500)
  }

  render() {
    return (
      <main id="IntroText">
        <section className="mast">
          <header className="mast__header">
            <h1 className="mast__title js-spanize">
              <span> LX </span> <span>Collection</span> <span> Presents </span>
            </h1>
            <br />
            <hr className="sep" />
            <br />
            <SpanText />
          </header>
        </section>
      </main>
    )
  }
}
