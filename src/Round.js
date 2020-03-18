const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.deck.cards[0];
  }

  takeTurn(guess) {
    const turn = new Turn(guess, this.returnCurrentCard());
    const turnStatus = {
      guessStatus : turn.evaluteGuess(),
      guessFeedback : turn.giveFeedback()
    };

    this.turns++;

    const shiftedCard = this.deck.cards.shift();
    this.deck.cards.push(shiftedCard);

    turnStatus.guessStatus === false ? this.incorrectGuesses.push(this.deck.cards[0].id) : undefined;


    return {turnStatus, turn};
  };

  calculatePercentCorrect() {
    const correctPercentage = Math.trunc((this.turns - this.incorrectGuesses.length) / this.turns * 100);
    return correctPercentage;
  };

  endRound() {
    return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`

  };

}

module.exports = Round;
