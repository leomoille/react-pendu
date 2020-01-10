import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Keyboard extends Component {
  handleClick (letter) {
    console.log(letter)
  }

  render () {
    return (
      <div className="Keyboard">
        <p>Keyboard: </p>
        {/* Touches du clavier ici */}
        {this.props.letters.map(letter => {
          return <button className="Key" key={letter.letter} onClick={() => this.handleClick(letter.letter)}>{letter.letter}</button>
        })}
      </div>
    )
  }
}

Keyboard.propTypes = {
  letters: PropTypes.array
}

export default Keyboard
