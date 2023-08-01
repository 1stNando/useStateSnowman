import React, { useState } from 'react'
import step_1 from './images/snowman/step_1.png'
import step_2 from './images/snowman/step_2.png'
import step_3 from './images/snowman/step_3.png'
import step_4 from './images/snowman/step_4.png'
import step_5 from './images/snowman/step_5.png'
import step_6 from './images/snowman/step_6.png'
import step_7 from './images/snowman/step_7.png'
import words from './words.json'

// Define variable to hold one randomly chosen word from our imported JSON file.
let randomWord = words[Math.floor(Math.random() * words.length)]

// Alphabet letters for the buttons to be clicked
const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')

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

  // Make a variable to be placeholder space the image number matching guess array length.
  let snowmanImageFetch = wordArray.filter((letter) =>
    guess.includes(letter)
  ).length

  // SNOWMAN switch statement that takes in value of snowmanImageFetch
  function getSnowman() {
    switch (snowmanImageFetch) {
      case 1:
        return step_1
      case 2:
        return step_2
      case 3:
        return step_3
      case 4:
        return step_4
      case 5:
        return step_5
      case 6:
        return step_6
      case 7:
        return step_7
    }
  }

  return (
    <div>
      <main>
        <header>Welcome to the SnowMan building game!</header>
        <h1></h1>
        <h2>
          <img src={getSnowman()} height="300px" />
        </h2>

        <div>
          <div>Guess the secret word to reveal the Snowman</div>
        </div>

        <div>
          <ul className="unknown-word-box">
            {wordArray.map((char, i) => {
              return <li key={i}>{guess.includes(char) ? char : '_'}</li>
            })}
          </ul>
        </div>
        <div className="alphabet-list">
          {alphabet.map((letter, index) => (
            <button
              key={index}
              onClick={() => handleClickedLetter(letter)}
              disabled={guess.includes(letter)}
              className={guess.includes(letter) ? 'clicked' : undefined}
            >
              {letter}
            </button>
          ))}
        </div>

        <div>
          {
            'Refresh the page to reset the game. If you completed the SnowMan click this button to play again '
          }
          <button
            onClick={() => handleNewGame()}
            disabled={snowmanImageFetch !== 7}
          >
            new game.
          </button>
        </div>
        <footer>
          {' '}
          Build by Fernando with the help of <br></br> Suncoast Developers Guild
          in 2023{' '}
        </footer>
      </main>
    </div>
  )
}
