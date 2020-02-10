import React, { Component } from 'react'
import Keyboard from './Components/Keyboard'
import WordIndicator from './Components/WordIndicator'
import HealthBar from './Components/HealthBar'
import './App.css'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      health: 10,
      wordToFind: 'abc', // For test
      wordActuallyFind: this.anonymizeWordToFind('abc'), // for test
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
      return new Error("Ce mot n'est pas un mot")
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
    const wordToFindCheck = this.handleKeyboardCick(
      this.state.wordToFind,
      this.state.wordActuallyFind,
      letter.letter
    )
    letter.used = true
    if (wordToFindCheck === this.state.wordActuallyFind) {
      this.defeatCheck()
    } else {
      this.victoryCheck(wordToFindCheck)
    }
  }

  defeatCheck () {
    if (this.state.health === 1) {
      this.setState({
        health: this.state.health - 1,
        wordActuallyFind: `Perdu! Le mot était : ${this.state.wordToFind}`
      })
    } else {
      this.setState({ health: this.state.health - 1 })
    }
  }

  victoryCheck (wordToFindCheck) {
    this.setState({ wordActuallyFind: wordToFindCheck }, () => {
      if (this.state.wordActuallyFind.indexOf('_') === -1) {
        this.setState({
          wordActuallyFind: `Victoire! Le mot était bien : ${this.state.wordToFind}`
        })
      }
    })
  }

  render () {
    const { letters, health, wordActuallyFind } = this.state

    return (
      <div className='App'>
        <HealthBar health={health} />
        <WordIndicator word={wordActuallyFind} />
        <Keyboard
          letters={letters}
          handleClick={this.onKeyboardClick.bind(this)}
        />
      </div>
    )
  }
}

export default App
