import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './WordIndicator.css'

class WordIndicator extends Component {
  render () {
    return (
      <div className='word-indicator'>
        <p>{this.props.word}</p>
      </div>
    )
  }
}

WordIndicator.propTypes = {
  word: PropTypes.string
}

export default WordIndicator
