import React, { Component } from 'react'
import FormSVG from './FormSVG'

export default class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // name: '',
      // email: '',
      broker: false,
      formSubmitted: false,
      showSubmitButton: true
    }
  }

  handleKeyPress = e => {
    const { name, email, broker } = this.state
    if (name.length === 0 || email.length === 0) {
    }
    if (e.key === 'Enter') {
      console.log('enter has been hit')
      e.preventDefault()
    }
  }

  toggleBroker = e => {
    e.preventDefault()
    console.log(e.target)
    document.querySelector('.yesno').setAttribute('focus', false)
    console.log(e.target.getAttribute('value'))
    this.setState(
      {
        showSubmitButton: true,
        broker: e.target.getAttribute('value')
      },
      () => {
        document.getElementById('submitButton').setAttribute('focus', true)
      }
    )
  }

  handleSubmit = e => {
    e.preventDefault()
    this.setState({
      formSubmitted: true
    })
  }
  handleBroker = e => {
    e.preventDefault()
    this.setState({
      broker: e.target.value
    })
  }
  handleEmail = e => {
    e.preventDefault()
    this.setState({
      email: e.target.value
    })
  }
  handleName = e => {
    e.preventDefault()
    this.setState({
      name: e.target.value
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
          <h2 className="">
            A highly curated collection of the most prestigious condominiums and architecture in the world
          </h2>
          <h2>Coming Soon</h2>
        </header>
        <form onSubmit={this.handleSubmit}>
          <input name="username" placeholder="Full Name" type="text" />
          <input name="email" placeholder="E-Mail Address" type="text" />
          <div className="agree">
            <input id="agree" name="agree" type="checkbox" />
            <label for="agree" />
            Do you have a broker?
          </div>
          <input className="animated" type="submit" value="SIGN UP FOR EXCLUSIVE UPDATES" />
        </form>
      </React.Fragment>
    )
    return <div className="form_component">{content}</div>
  }
}

