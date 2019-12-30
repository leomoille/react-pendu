import React, { Component } from 'react'

class Keyboard extends Component {
  render () {
    return (
      <div className="Keyboard">
        <p>Keyboard: </p>
        {/* Touches du clavier ici */}
        {this.props.letters.map(letter => {
          return <span className="Key" key={letter}>{letter.letter}</span>
        })}
      </div>
    )
  }
}

export default Keyboard
