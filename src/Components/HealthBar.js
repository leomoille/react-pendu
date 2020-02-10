import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './HealthBar.css'

class HealthBar extends Component {
  render () {
    const healthBar = '❤❤❤❤❤❤❤❤❤❤'
    return (
      <div className='healthBar'>
        <p className='healthBar--info'>{
          this.props.health === healthBar.length
            ? healthBar
            : healthBar.substring(0, this.props.health)}
        </p>
      </div>
    )
  }
}

HealthBar.propTypes = {
  health: PropTypes.number
}

export default HealthBar
