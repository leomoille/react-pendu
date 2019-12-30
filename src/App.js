import React, { Component } from 'react'
import Keyboard from './Components/Keyboard'
import WordIndicator from './Components/WordIndicator'
import './App.css'
import HealthBar from './Components/HealthBar'

class App extends Component {
  getAlphabet () {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    const letters = []
    /* Ajout de chaque lettre de l'alphabet dans le tableau d'objet letters */
    for (let i = 0; i < alphabet.length; i++) {
      letters.push({
        letter: alphabet[i],
        used: false
      })
    }
    return letters
  }

  constructor (props) {
    super(props)
    this.state = {
      health: 6,
      wordToFind: 'react',
      wordActuallyFind: '_____',
      letters: this.getAlphabet()
    }
  }

  render () {
    return (
      <div>
        {/* Affiche un clavier complet de 26 touches */}
        <Keyboard letters={this.state.letters}/>
        {/* Affiche la bar de vie du joueur */}
        <HealthBar health={this.state.health}/>
        {/* Affiche le statut du mot actuel */}
        <WordIndicator word={this.state.wordActuallyFind}/>
      </div>
    )
  }
}

export default App
