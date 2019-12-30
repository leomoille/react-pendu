import React, { Component } from 'react'

class HealthBar extends Component {
  render () {
    return (
      <div>
        <p>Health: {this.props.health}</p>
      </div>
    )
  }
}

export default HealthBar
