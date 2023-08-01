import React, { useState } from 'react'
import step_7 from './images/snowman/step_7.png'
import words from './words.json'

// Define variable to hold one randomly chosen word from our imported JSON file.
let randomWord = words[Math.floor(Math.random() * words.length)]

// Alphabet letters for the buttons to be clicked
const querty = 'abcdefghijklmnopqrstuvwxyz'.split('')

export function App() {
  console.log(`Your random word is ${randomWord}`)

  // Establish what state we want to keep track of changing. randomWord is passed down into this and establishes a new word.
  const [wordState, setWordState] = useState(randomWord)
  const [guess, setGuess] = useState<string[]>([])

  // Set an array constructor to decompose the random word received and create an array.
  const wordArray = Array.from(wordState)

  //

  // Set an asynchronous function to constantly wait for a letter click, and update the STATE of guess.
  async function handleClickedLetter(letter: string) {
    setGuess([...guess, letter])
  }

  // Function to deal with making a new game.
  function handleNewGame() {
    // run the work to find random word from JSON file.
    randomWord = words[Math.floor(Math.random() * words.length)]

    // Set state to this randomly found word.
    setWordState(randomWord)
    // Set the state of guesses to an empty array since no clicks have occurred.
    setGuess([])
  }

  // Make a variable to be placeholder space for the array of letters that make up the random word's letters.
  let snowmanImage = wordArray.filter((letter) => guess.includes(letter)).length

  return (
    <div>
      <main>
        <h2>
          Click to <button>START</button>
        </h2>

        <div>
          <div>WordGuess</div>
        </div>

        <div>
          <ul>
            {wordArray.map((char, i) => {
              return <li key={i}>{guess.includes(char) ? char : '_'}</li>
            })}
          </ul>
        </div>
      </main>
    </div>
  )
}

/* <img className="man" src={step_7}></img>
      <section>
        <ul className="unknown-word-box">
          <li>_</li>
          <li>_</li>
          <li>_</li>
          <li>_</li>
          <li>_</li>
          <li>_</li>
          <li>_</li>
        </ul>
      </section>
      <ul className="alphabet-list">
        <li onClick={handleClickLetter}>A</li>
        <li onClick={handleClickLetter}>B</li>
        <li onClick={handleClickLetter}>C</li>
        <li onClick={handleClickLetter}>D</li>
        <li onClick={handleClickLetter}>E</li>
        <li onClick={handleClickLetter}>F</li>
        <li onClick={handleClickLetter}>G</li>
        <li onClick={handleClickLetter}>H</li>
        <li onClick={handleClickLetter}>I</li>
        <li onClick={handleClickLetter}>J</li>
        <li onClick={handleClickLetter}>K</li>
        <li onClick={handleClickLetter}>L</li>
        <li onClick={handleClickLetter}>M</li>
        <li onClick={handleClickLetter}>N</li>
        <li onClick={handleClickLetter}>O</li>
        <li onClick={handleClickLetter}>P</li>
        <li onClick={handleClickLetter}>Q</li>
        <li onClick={handleClickLetter}>R</li>
        <li onClick={handleClickLetter}>S</li>
        <li onClick={handleClickLetter}>T</li>
        <li onClick={handleClickLetter}>U</li>
        <li onClick={handleClickLetter}>V</li>
        <li onClick={handleClickLetter}>W</li>
        <li onClick={handleClickLetter}>X</li>
        <li onClick={handleClickLetter}>Y</li>
        <li onClick={handleClickLetter}>Z</li>
      </ul> */
