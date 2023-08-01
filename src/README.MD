Find the deployed product at: https://SnowmanNando.netlify.app

Assignment 31 - Do you want to build a Snowman?

In this assignment, you'll build a less grim variation of a popular game called hangman.

Objectives:
Reinforce component architecture in React
Effective use props and state in React

Requirements:
We're going to build a sort of reverse hangman. The player can't lose; they just get to build a snowman by adding parts each time they guess a letter correctly. You will need to download these files and add them to your project:

    Word List
    Snowman Images (Unzip these before adding to your project)

Setup:
degit 1stNando/react-project-template Snowman

Explorer Mode

    Selects a random word from the list and display a number of blank spaces (or underscores) equal to the word length.
    Display a list of letters, A through Z as clickable buttons.
    When the player guesses a letter (clicks the button):
        All instances of that letter are revealed at their corresponding positions in the word.
        The button becomes disabled, as it has already been guessed.
        Display the snowman image that corresponds with the number of letters revealed in the word.
