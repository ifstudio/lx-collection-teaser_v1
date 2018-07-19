import React, { Component } from 'react'
import anime from 'animejs'
import './form.css'

export default class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      formSubmitted: false
    }
  }
  handleSubmit = e => {
    e.preventDefault()
    this.setState({
      formSubmitted: true
    })
  }
  render() {
    const content = this.state.formSubmitted ? (
      <React.Fragment>
        <header>
          <h2 className="">Thank You for Signing Up</h2>
        </header>
        <FormSVG />
      </React.Fragment>
    ) : (
      <React.Fragment>
        <header>
          <h2 className="">A highly curated collection of the most prestigious residential listings in the world</h2>
          <h2>Launching Fall 2018</h2>
        </header>
        <form onSubmit={this.handleSubmit}>
          <input id="input-1" type="text" placeholder="John Doe" required autofocus />
          <label for="input-1">
            <span className="label-text">Full Name</span>
            <span className="nav-dot" />
            <div className="signup-button-trigger">Sign Up</div>
          </label>
          <input id="input-2" type="email" placeholder="email@address.com" required />
          <label for="input-2">
            <span className="label-text">Email</span>
            <span className="nav-dot" />
          </label>
          <input id="input-3" type="text" placeholder="Yes or No" required />
          <label for="input-3">
            <span className="label-text">Broker?</span>
            <span className="nav-dot" />
          </label>
          <button type="submit">Submit</button>
          <p className="tip">Press Tab</p>
          <div className="signup-button">Subscribe</div>
        </form>
      </React.Fragment>
    )
    return <div className="form_component">{content}</div>
  }
}

class FormSVG extends Component {
  componentDidMount() {
    const lineDrawing = anime({
      targets: '.anim .lines path',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 1500,
      delay: function(el, i) {
        return i * 250
      },
      direction: 'alternate',
      loop: false
    })

    lineDrawing.complete = () => {
      console.log('animation complete, firing props')
    }
  }
  render() {
    return (
      <div className="form_svg">
        <div className="anim">
          <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 445.89 569">
            <g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-width="1" className="lines">
              <path
                className="cls-1"
                d="M367.09,407.23l31.64,51h35.59l-31.89-51H367.09Zm-111.35,51H287c-5.57-5-8.36-10.21-8.36-15.48a18.19,18.19,0,0,1,2.79-9.29l18-26.24h-1.77l-17.79,25.93c-6.81,9.59-14.24,18.57-24.14,25.07M420.09,241.57H388.82s8.36,5.26,8.36,14.86c-0.62,7.12-4,11.14-6.81,15.79L352.3,327.3l-53.24-85.74H263.78l69.3,111.12h35.25l-15.1-24.15,43-62.21c6.5-9.6,13.93-18.26,23.83-24.76"
                transform="translate(-84 -111)"
              />
              <path
                className="cls-1"
                d="M371.8,634.14c-20.62,28.62-46.16,44.32-84,44.32-44.32,0-84.63-33.85-84.63-110.48,0-72.63,40-110.48,80.32-110.48,36,0,60.94,13.85,74.78,30.47,9.23,11.39,15.39,26.78,15.39,26.78V480.57a16.75,16.75,0,0,1-8.31,2.15c-10.77,0-12.93-6.46-31.08-15.69C319.18,459.34,299.79,456,283.48,456c-58.78,0-112.33,34.16-112.33,111.72,0,66.78,42.78,112.33,116.64,112.33,39.39,0,65.86-16.62,85.86-45.86H371.8Z"
                transform="translate(-84 -111)"
              />
              <path
                className="cls-1"
                d="M187.41,327.66H152.15a38.67,38.67,0,0,0,5.26-19.5V130.81A39.15,39.15,0,0,0,152.15,111h35.28V326.11"
                transform="translate(-84 -111)"
              />
              <path
                className="cls-1"
                d="M187.43,326.11h53.24c45.5,0,58.19-27.54,58.19-27.54v29.09H187.41"
                transform="translate(-84 -111)"
              />
              <path
                className="cls-1"
                d="M501.36,398.59h2.42V366.81h0.36l23.32,31.78h2.42V362.48h-2.42v31.78H527.1l-23.32-31.78h-2.42v36.12Zm-31-1.86a16.21,16.21,0,1,1,15.84-16.2,16.21,16.21,0,0,1-15.84,16.2m0-34.78a18.58,18.58,0,1,0,18.32,18.57A18.63,18.63,0,0,0,470.4,362m-31,.52H437v36.12h2.42V362.48Zm-14.81,0H401v2.32h10.63v33.8H414V364.8h10.63v-2.32Zm-34.78,32.25-1.65-1.7a15.69,15.69,0,0,1-10.11,3.71,16.2,16.2,0,0,1,0-32.4A15.55,15.55,0,0,1,388.16,368l1.6-1.81a18.58,18.58,0,1,0,.1,28.48m-58.35,1.55V381.62h14.09V379.3H331.5V364.8h17.8v-2.32H329.08v36.12h20.69v-2.32H331.5Zm-32.14,0v-33.8h-2.43v36.12H316.7v-2.32H299.36Zm-32.14,0v-33.8h-2.43v36.12h19.76v-2.32H267.22Zm-33.38.46a16.21,16.21,0,1,1,15.84-16.2,16.21,16.21,0,0,1-15.84,16.2m0-34.78a18.58,18.58,0,1,0,18.32,18.57A18.63,18.63,0,0,0,233.83,362M205.2,394.72l-1.65-1.7a15.69,15.69,0,0,1-10.11,3.71,16.2,16.2,0,0,1,0-32.4A15.56,15.56,0,0,1,203.5,368l1.6-1.81a18.58,18.58,0,1,0,.1,28.48M144,398.59l-13.36-18.68L143,362.48h-2.89l-11,15.38-11-15.38h-2.94l12.49,17.44-13.36,18.68h2.94L129.15,382,141,398.59H144Zm-57.53-2.32v-33.8H84v36.12h19.76v-2.32H86.42Z"
                transform="translate(-84 -111)"
              />
            </g>
          </svg>
        </div>
      </div>
    )
  }
}
