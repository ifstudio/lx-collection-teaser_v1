import React, { Component } from 'react'
import './introText.css'

export default class IntroText extends Component {
  componentDidMount() {
    const intro = document.getElementById('IntroText')
    setTimeout(() => {
      document.querySelector('.mast').classList.add('animation_finished')
    }, 5500)
    
    setTimeout(() => {
      this.props.endAnimation(intro)
    }, 6500)
    
  }

  render() {
    return (
      <main id='IntroText'>
          <section className="mast">
            <header className="mast__header">
              <h1 className="mast__title js-spanize"><span>LX</span> <span>Collection</span> <span>Presents</span></h1> 
              <br />
              <hr className="sep"/>
              <br />
              <p className="mast__text js-spanize"><span>A</span> <span>new</span> <span>experience</span> <span>in</span> <span>the</span> <span>world</span> <span>of</span> <span>residential</span><br /> <span>listings</span> <span>is</span> <span>coming</span></p>
            </header>
          </section>
        </main>
    )
  }
}


// A highly curated collection of the most prestigious condominiums and architecture in the world
// </h2>
// <h2>Coming Soon</h2>