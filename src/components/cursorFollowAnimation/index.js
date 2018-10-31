import React, { Component, Fragment } from 'react'
import init from './cursor'
import './index.css'

const Goo = () => {
  return (
    <svg id='goo' xmlns='http://www.w3.org/2000/svg' version='1.1' width='800'>
      <defs>
        <filter id='goo'>
          <feGaussianBlur in='SourceGraphic' stdDeviation='6' result='blur' />
          <feColorMatrix
            in='blur'
            mode='matrix'
            values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 35 -15'
            result='goo'
          />
          <feComposite in='SourceGraphic' in2='goo' operator='atop' />
        </filter>
      </defs>
    </svg>
  )
}

const CursorCircle = () => (
  <svg id='cursorCircle'>
    <circle
      className='circle'
      height='50'
      width='50'
      cx='25'
      cy='25'
      r='15'
      stroke='#231f20'
      stroke-width='2'
      fill-opacity='0'
    />
  </svg>
)

class CursorFollowAnimation extends Component {
  componentDidMount () {
    const cursor = document.getElementById('cursor')
    init(cursor)
  }
  render () {
    return (
      <Fragment>
        <Goo />
        <CursorCircle />
        <div id='cursor' className='Cursor' />
      </Fragment>
    )
  }
}

export default CursorFollowAnimation
