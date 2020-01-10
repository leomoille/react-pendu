import React, { Component } from 'react'
import PropTypes from 'prop-types'

class WordIndicator extends Component {
  render () {
    return (
      <p>Mot à trouver : {this.props.word}</p>
    )
  }
}

WordIndicator.propTypes = {
  word: PropTypes.string
}

export default WordIndicator
