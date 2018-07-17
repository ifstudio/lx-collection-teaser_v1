import React, { Component } from 'react'
import { Mouse } from '../mouse/mouse'
import anime from 'animejs'
import './introText.css'

export default class IntroText extends Component {
  componentDidMount() {
    setTimeout(() => {
      document.querySelector('.mast').classList.add('animation_finished')
    }, 2000)
    
  }

  render() {
    return (
      <main id='IntroText'>
          <section className="mast">
            <header className="mast__header">
              <h1 className="mast__title js-spanize"><span>LX</span> <span>Collections</span> <span>Presents</span></h1> 
              <br />
              <hr className="sep"/>
              <br />
              <p className="mast__text js-spanize"><span>A</span> <span>new</span> <span>experience</span> <span>in</span> <span>the</span> <span>world</span> <span>of</span> <span>residential</span><br /> <span>listings</span> <span>is</span> <span>coming</span></p>
            </header>
          </section>
          <Mouse />
        </main>
    )
  }
}
