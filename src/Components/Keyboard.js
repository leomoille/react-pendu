import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Keyboard.css'

class Keyboard extends Component {
  handleClick (letter) {
    this.props.handleClick(letter)
  }

  render () {
    return (
      <div className='keyboard'>
        {/* Touches du clavier ici */}
        {this.props.letters.map(letter => {
          console.log(letter)

          return (
            <button
              className={`keyboard--button ${letter.used ? 'keyboard--button__used' : ''}`}
              key={letter.letter}
              onClick={() => this.handleClick(letter)}>
              {letter.letter}
            </button>
          )
        })}
      </div>
    )
  }
}

Keyboard.propTypes = {
  letters: PropTypes.array,
  handleClick: PropTypes.func
}

export default Keyboard
