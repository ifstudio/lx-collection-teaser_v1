import React, { Component } from 'react'
import FormMarkUp from './FormMarkUp'
import FormSVG from './FormSVG'
import { scrollToTop } from '../../utils/scrollToTop'

export default class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
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
      e.preventDefault()
    }
  }

  toggleBroker = e => {
    e.preventDefault()
    document.querySelector('.yesno').setAttribute('focus', false)
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
    alert(
      `Form Submitted: ${this.state.name}, ${this.state.email}, ${
        this.state.broker
      }`
    )
    this.setState(
      {
        formSubmitted: true
      },
      () => {
        setTimeout(() => {
          scrollToTop(e)
        }, 4000)
      }
    )
  }
  handleBroker = e => {
    e.preventDefault()
    this.setState({
      broker: !this.state.broker
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
          <h2 className=""> Thank You for Signing Up </h2>
        </header>
        <FormSVG />
      </React.Fragment>
    ) : (
      <React.Fragment>
        <header>
          <h2 className="">
            A highly curated collection of the most prestigious condominiums and
            architecture in the world
          </h2>
          <h2> Coming Soon </h2>
        </header>
        <FormMarkUp
          handleSubmit={this.handleSubmit}
          handleBroker={this.handleBroker}
          handleEmail={this.handleEmail}
          handleName={this.handleName}
        />
      </React.Fragment>
    )
    return (
      <div className="content__section">
        <div className="form_component"> {content} </div>
      </div>
    )
  }
}
