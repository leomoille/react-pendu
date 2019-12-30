import React, { Component } from 'react'

class WordIndicator extends Component {
  render () {
    return (
      <p>Mot à trouver : {this.props.word}</p>
    )
  }
}

export default WordIndicator
