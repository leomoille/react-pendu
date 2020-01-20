import React, { Component } from 'react'
import Keyboard from './Components/Keyboard'
import WordIndicator from './Components/WordIndicator'
import HealthBar from './Components/HealthBar'
import './App.css'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      health: 6,
      wordToFind: 'react',
      wordActuallyFind: this.anonymizeWordToFind('react'),
      letters: this.lettersGenerating()
    }
  }

  lettersGenerating () {
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

  /**
   * Anonimyze a word
   * @param {string} wordToFind - A string to anonymize
   * @returns {string} wordToFind anonymized
   */
  anonymizeWordToFind (wordToFind) {
    if (typeof wordToFind !== 'string') {
      return new Error('Ce mot n\'est pas un mot')
    }

    let WordToFindAnonymized = ''
    for (let i = 0; i < wordToFind.length; i++) {
      WordToFindAnonymized += '_ '
    }

    return WordToFindAnonymized
  }

  /**
   * Add the new letter to the word
   * @param {string} wordToFind - The word to find
   * @param {string} wordActuallyFind - the word anonimyzed to find (with space between underscores)
   * @param {string} letter - The letter to add in the word
   * @returns {string} - Return the word with the new letter
   */
  handleKeyboardCick (wordToFind, wordActuallyFind, letter) {
    const wordActuallyFindArr = wordActuallyFind.split(' ')

    for (let i = 0; i < wordToFind.length; i++) {
      if (wordToFind[i] === letter) {
        wordActuallyFindArr[i] = `${letter}`
      }
    }

    return wordActuallyFindArr.join(' ')
  }

  /**
   * Check the letter pressed by the virtual keyboard
   * @param {string} letter - The letter to check
   */
  onKeyboardClick (letter) {
    const wordToFindCheck = this.handleKeyboardCick(this.state.wordToFind, this.state.wordActuallyFind, letter)

    if (wordToFindCheck === this.state.wordActuallyFind) {
      this.setState({ health: this.state.health - 1 })
    } else {
      this.setState({ wordActuallyFind: wordToFindCheck })
    }
  }

  // TEST
  testSimulation () {
    // test avec un mot
    if (this.anonymizeWordToFind('react') === '_ _ _ _ _') {
      console.log('OK')
    } else {
      console.log('fail RED RED RED')
    }

    // test avec deux mots
    if (this.anonymizeWordToFind('react et') === '_ _ _ _ _   _ _') {
      console.log('OK')
    } else {
      console.log('fail RED RED RED')
    }

    // test avec deux mots
    this.testSimulation.assertEquals(this.anonymizeWordToFind('react et'), '_ _ _ _ _   _ _')
    this.testSimulation.raiseError(this.anonymizeWordToFind(-1))
  }

  render () {
    const { letters, health, wordActuallyFind } = this.state

    return (
      <div>
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
