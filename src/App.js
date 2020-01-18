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
    if (typeof wordToFind !== 'string') {
      return new Error('Ce mot n\'est pas un mot')
    }

    // algorithme
    let wordAnonyme = ''
    for (let i = 0; i < wordToFind.length; i++) {
      wordAnonyme += '_ '
    }

    // return
    console.log(wordAnonyme)

    return wordAnonyme
  }

  /**
   * handleWordActuallyFind - ...
   * @param {String} wordToFind - the word to find
   * @param {String} letter - the letter used by the keyboard
   * @returns {String} the word with letters replaced by the correct letter
   * 1 - DOIT ETRE UNE LETTRE  (react, t) -> _ _ _ _t
   *         var newAnonyme = ''
   *        POUR WORDTOFIND.LENGTH
   *            SI WORDTOFIND[I] === letter
   *              newAnonyme += letter
   *            SINON
   *               newAnonyme += '_'
   *        return newAnonyme
   *                         react       _ e _ _ _         t        ->    _ e _ _ t    */
  handleWordActuallyFind (wordToFind, wordActuallyFind, letter) {
    // TEST
    console.log('HANDLEWORDACTUALLYFIND', 'wordTofind:' + wordToFind, 'wordActuallyFind:' + wordActuallyFind, 'letter:' + letter)

    const newAnonyme = wordActuallyFind.split(' ')

    for (let i = 0; i < wordToFind.length; i++) {
      if (wordToFind[i] === letter) {
        newAnonyme[i] = `${letter}`
      }
    }

    console.log('RETURN', 'newAnonyme' + newAnonyme)
    return newAnonyme.join(' ')
  }

  onKeyboardClick (letter) {
    console.log('ONKEYBOARDCLICK', 'letter:' + letter, 'this.state.wordToFind:' + this.state.wordToFind)

    var newWordActuallyFind = this.handleWordActuallyFind(this.state.wordToFind, this.state.wordActuallyFind, letter)
    if (newWordActuallyFind === this.state.wordActuallyFind) {
      const actualizedHealth = this.state.health - 1
      this.setState({ health: actualizedHealth })
    } else {
      this.setState({ wordActuallyFind: newWordActuallyFind })
    }
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
