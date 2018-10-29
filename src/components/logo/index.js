import React from 'react'
import { LogoSVG } from './LogoSVG'

const scrollToTop = e => {
  e.preventDefault()
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
  setTimeout(() => {
    window.location.reload()
  }, 1500)
}
export const Logo = props => (
  <span className="logo">
    <LogoSVG scrollToTop={e => scrollToTop(e)} />{' '}
    <span className="sign_up__link" onClick={props.scrollToBottom}>
      Sign Up{' '}
    </span>{' '}
  </span>
)
