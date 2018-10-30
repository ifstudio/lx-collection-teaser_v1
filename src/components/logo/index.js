import React from 'react'
import { LogoSVG } from './LogoSVG'
import {
  scrollToTop
} from '../../utils/scrollToTop'

export const Logo = props => (
  <span className='logo'>
    <LogoSVG scrollToTop={e => scrollToTop(e, true)} />
    <span className='sign_up__link' onClick={props.scrollToBottom}>
      Sign Up
    </span>
  </span>
)
