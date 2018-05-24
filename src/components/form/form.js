import React, { Component } from 'react'
import './form.css'
export default class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div className="form_component">
        <header>
          <h2 className="">A highly curated collection of the most prestigious residences</h2>
          <h2>Launching Fall 2018</h2>
        </header>
        <form>
          <input id="input-1" type="text" placeholder="John Doe" required autofocus />
          <label for="input-1">
            <span className="label-text">Full Name</span>
            <span className="nav-dot" />
            <div className="signup-button-trigger">Sign Up</div>
          </label>
          <input id="input-2" type="text" placeholder="john" required />
          <label for="input-2">
            <span className="label-text">Username</span>
            <span className="nav-dot" />
          </label>
          <input id="input-3" type="email" placeholder="email@address.com" required />
          <label for="input-3">
            <span className="label-text">Email</span>
            <span className="nav-dot" />
          </label>
          <input id="input-4" type="text" placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;" required />
          <label for="input-4">
            <span className="label-text">Password</span>
            <span className="nav-dot" />
          </label>
          <input id="input-5" type="text" placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;" required />
          <label for="input-5">
            <span className="label-text">Confirm Password</span>
            <span className="nav-dot" />
          </label>
          <button type="submit">Create Your Account</button>
          <p className="tip">Press Tab</p>
          <div className="signup-button">Subscribe</div>
        </form>
      </div>
    )
  }
}
