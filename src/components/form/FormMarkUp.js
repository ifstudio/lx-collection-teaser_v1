import React from 'react'

const FormMarkUp = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <input
        name='username'
        placeholder='Full Name'
        type='text'
        onChange={props.handleName}
      />
      <input
        name='email'
        placeholder='E-Mail Address'
        type='text'
        onChange={props.handleEmail}
      />
      <div className='agree'>
        <input id='agree' name='agree' type='checkbox' onChange={props.handleBroker} />
        <label for='agree' />
        Do you have a broker ?
      </div>
      <input
        className='animated'
        type='submit'
        value='SIGN UP FOR EXCLUSIVE UPDATES'
      />
    </form>
  )
}

export default FormMarkUp
