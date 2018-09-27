import React, { Component } from 'react'

export default class IntroText extends Component {
  componentDidMount() {
    const intro = document.getElementById('IntroText')

    setTimeout(() => {
      debugger
      document.querySelector('.mast').classList.add('animation_finished')
      document.querySelector('.arrow_down').style.display = 'none'
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
              <span>LX</span> <span>Collection</span> <span>Presents</span>
            </h1>
            <br />
            <hr className="sep" />
            <br />
            <p className="mast__text js-spanize">
              <span>A</span> <span>highly</span> <span>curated</span>{' '}
              <span>collection</span> <br /> <span>of</span>
              <span>the</span> <span>most</span> <span>prestigious</span>{' '}
              <span>condominiums</span> <span>and</span>{' '}
              <span>architecture</span>
              <br /> <span>in</span> <span>the</span> <span>world</span>
            </p>
          </header>
          <ArrowDown />
        </section>
      </main>
    )
  }
}
const ArrowDown = () => (
  <div
    className="arrow_down"
    style={{
      position: 'absolute',
      width: '100%',
      left: 0,
      bottom: '20px',
      height: '40px',
      display: 'flex',
      justifyContent: 'center'
    }}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="feather feather-chevrons-down">
      <polyline points="7 13 12 18 17 13" />
      <polyline points="7 6 12 11 17 6" />
    </svg>
  </div>
)
