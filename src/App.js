import React, { Component } from 'react'
import Keyboard from './Components/Keyboard'
import WordIndicator from './Components/WordIndicator'
import HealthBar from './Components/HealthBar'
import './App.css'

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
      wordActuallyFind: this.generateWordActuallyFind('react'),
      letters: this.getAlphabet()
    }
  }

  /**
   * generateWordActuallyFind - generate wordActuallyFind ( with letters replaced by '_' underscores) from wordToFind
   * @param {String} wordToFind - the word to find
   * @returns {String} the word with letters replaced by '_' underscores
   */
  generateWordActuallyFind (wordToFind) {
    if (typeof wordToFind !== String) {
      new Error()
    }
    // algorithme
    let wordAnonyme = ''
    for (let i = 0; i < wordToFind.length; i++) {
      wordAnonyme += wordToFind[i].replace(wordToFind[i], '_ ')
    }
    // return
    console.log(wordAnonyme)

    return wordAnonyme
  }

  handleWordActuallyFind () {
  }

  onKeyboardClick (letter) {
    console.log(letter)

    this.setState({ wordActuallyFind: letter })
  }

  // TEST
  testSimulation () {
    // test avec un mot
    if (this.generateWordActuallyFind('react') === '_ _ _ _ _') {
      console.log('OK')
    } else {
      console.log('fail RED RED RED')
    }

    // test avec deux mots
    if (this.generateWordActuallyFind('react et') === '_ _ _ _ _   _ _') {
      console.log('OK')
    } else {
      console.log('fail RED RED RED')
    }

    // test avec deux mots
    this.testSimulation.assertEquals(this.generateWordActuallyFind('react et'), '_ _ _ _ _   _ _')
    this.testSimulation.raiseError(this.generateWordActuallyFind(-1))
  }

  render () {
    const { letters, health, wordActuallyFind } = this.state

    return (
      <div>
        <button onClick={() => this.generateWordActuallyFind('react')}>Click</button>
        {/* Affiche un clavier complet de 26 touches */}
        <Keyboard letters={letters} handleClick={this.onKeyboardClick.bind(this)}/>
        {/* Affiche la bar de vie du joueur */}
        <HealthBar health={health} />
        {/* Affiche le statut du mot actuel */}
        <WordIndicator word={wordActuallyFind} />
      </div>
    )
  }
}

export default App
