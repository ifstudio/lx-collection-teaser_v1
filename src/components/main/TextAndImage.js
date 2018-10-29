import React from 'react'

export const TextAndImage = props => (
  <div className="content__section">
    <a className="content__link">
      <img className="content__img" src={props.img} alt="img" />
    </a>
    <h2 className="content__text" id={`${props.text.toLowerCase()}`}>
      {props.text}
    </h2>
  </div>
)
