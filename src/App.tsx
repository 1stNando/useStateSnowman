import React, { useState } from 'react'
import step_7 from './images/snowman/step_7.png'
import words from './words.json'

let randomWord = words[Math.floor(Math.random() * words.length)]

export function App() {
  return (
    <main>
      <h1>Title Head</h1>
      <h2>
        Click to <button>START</button>
      </h2>

      <div>
        <div>WordGuess</div>
      </div>
    </main>
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
