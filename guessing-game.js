function guessingGame() {
    let numberOfGuesses = 0;
    let numberToGuess = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
    let hasWon = false;

    return function(guess) {
        numberOfGuesses++;
        if (hasWon) return "The game is over, you already won!";

        if (guess < numberToGuess) return `${guess} is too low!`;
        if (guess > numberToGuess) return `${guess} is too high!`;
        hasWon = true;
        return `You win! You found ${guess} in ${numberOfGuesses} guesses.`;
    };
}

module.exports = { guessingGame };
