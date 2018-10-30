import React, { Fragment } from 'react'
import { ArrowDown } from '../ArrowDown'
export const TextOnly = props => (
  <Fragment>
    <div className='content__section'>
      <h2 className='content__text'>{props.text}</h2>
    </div>
    {props.text.toLowerCase() === 'discerning' ? <ArrowDown /> : null}
  </Fragment>
)
