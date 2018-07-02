import React, { Component } from 'react'
import { MorphReplace } from 'react-svg-morph'
import { easeInQuint } from 'react-svg-morph/lib/utils/easing'
import { L, X, C, Logo } from '../svg/logo'
import './intro.css'

class LSVG extends Component {
  render() {
    return <L />
  }
}
class XSVG extends Component {
  render() {
    return <X />
  }
}

class CSVG extends Component {
  render() {
    return <C />
  }
}
class LogoSVG extends Component {
  render() {
    return <Logo />
  }
}

export default class Intro extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: 'L'
    }
    this.increment = 0
    this.swap()
  }

  componentDidMount() {
    if (this.props.fireIntro) {
      // setTimeout(() => {
      //   this.runAnimation()
      // }, 500)
    }
  }
  swap = () => {
    setInterval(() => {
      this.increment++
      if (this.increment < 3) {
        this.forceUpdate()
      } else if (this.increment === 3){
        this.props.animationIsOver(true)
      }
    }, 1500)
  }

  runAnimation = () => {
    setTimeout(() => {
      this.setState({
        active: 'X'
      })
    }, 2000)
    setTimeout(() => {
      this.setState({
        active: 'C'
      })
    }, 3500)
    setTimeout(() => {
      this.setState({
        active: 'logo'
      })
    }, 5000)
    setTimeout(() => {
      this.props.animationIsOver(true)
    }, 7000)
  }
  render() {
    const toggle = () => {
      if (this.state.active === 'L') {
        return <LSVG key="L-svg" />
      } else if (this.state.active === 'X') {
        return <XSVG key="X-svg" />
      } else if (this.state.active === 'C') {
        return <CSVG key="C-svg" />
      } else if (this.state.active === 'logo') {
        return <LogoSVG key="Logo-svg" />
      }
    }
    const icons = [<LSVG key="L-svg" />, <XSVG key="X-svg" />, <CSVG key="C-svg" />, <LogoSVG key="Logo-svg" />]
    // duration={1000}
    const active = icons[this.increment]

    return (
      <div className="intro">
        <div className="morph">
          <MorphReplace width={600} height={700} easing={easeInQuint}>
            {/* {toggle()} */}
            {active}
          </MorphReplace>
        </div>
      </div>
    )
  }
}
