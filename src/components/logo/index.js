import React from 'react'
import { LogoSVG } from './LogoSVG'

export const Logo = props => (
  <span className="logo">
    <LogoSVG />
    <span className="sign_up__link" onClick={props.scrollToBottom}>
      Sign Up
    </span>
  </span>
)
