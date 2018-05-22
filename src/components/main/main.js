import React, { Component } from 'react'
import Form from '../form/form'

class Main extends Component {
  componentDidMount() {
    const script1 = document.createElement('script')
    const script2 = document.createElement('script')
    const script3 = document.createElement('script')
    const script4 = document.createElement('script')
    const body = document.querySelector('body')
    const app = document.querySelector('.App')

    script1.src = '/js/imagesloaded.pkgd.min.js'
    script2.src = '/js/charming.min.js'
    script3.src = '/js/anime.min.js'
    script4.src = '/js/demo4.js'

    const scripts = [script1, script2, script3, script4]

    scripts.forEach(script => {
      body.appendChild(script)
    })
    app.classList.remove('loading')
  }

  render() {
    return (
      <main className="main">
        <div className="content">
          <div className="content__section">
            <h2 className="content__text">Discerning</h2>
          </div>
          <div className="content__section">
            <a className="content__link">
              <img className="content__img" src="img/bw2.jpg" alt="img" />
            </a>
            <h2 className="content__text">Refined</h2>
          </div>
          <div className="content__section">
            <a className="content__link">
              <img className="content__img" src="img/bg2.jpg" alt="img" />
            </a>
            <h2 className="content__text">Curated</h2>
          </div>
          <div className="content__section">
            <a className="content__link">
              <img className="content__img" src="img/bw4.jpg" alt="img" />
            </a>
            <h2 className="content__text">Elevated</h2>
          </div>
          <div className="content__section">
            <a className="content__link">
              <img className="content__img" src="img/cuffs.jpg" alt="img" />
            </a>
            <h2 className="content__text">Elevated</h2>
          </div>
          <div className="content__section">
            <a className="content__link">
              <img className="content__img" src="img/girl.jpg" alt="img" />
            </a>
            <Form />
            <h2 className="content__text">Iconic</h2>
          </div>
        </div>
      </main>
    )
  }
}

export default Main

{/* <div className="content">
<div className="content__section">
  <h2 className="content__text">Discerning</h2>
</div>
<div className="content__section">
  <a className="content__link">
    <img className="content__img" src="img/car_window.jpg" alt="img" />
  </a>
  <h2 className="content__text">Refined</h2>
</div>
<div className="content__section">
  <a className="content__link">
    <img className="content__img" src="img/roof.jpg" alt="img" />
  </a>
  <h2 className="content__text">Curated</h2>
</div>
<div className="content__section">
  <a className="content__link">
    <img className="content__img" src="img/roof_pool.jpg" alt="img" />
  </a>
  <h2 className="content__text">Elevated</h2>
</div>
<div className="content__section">
  <a className="content__link">
    <img className="content__img" src="img/rain_car.jpg" alt="img" />
  </a>
  <h2 className="content__text">Elevated</h2>
</div>
<div className="content__section">
  <a className="content__link">
    <img className="content__img" src="img/bw4.jpg" alt="img" />
  </a>
  <Form />
  <h2 className="content__text">Iconic</h2>
</div>
</div> */}