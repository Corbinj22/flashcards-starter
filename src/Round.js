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

    turn.status = turnStatus.guessFeedback;
    this.turns++;

    const shiftedCard = this.deck.cards.shift();

    if(turnStatus.guessStatus === false && this.deck.cards[0]) {
      this.incorrectGuesses.push(this.deck.cards[0].id)
    }

    return turn
  };

  calculatePercentCorrect() {
    console.log('turn', this.turns);
    console.log('length', this.incorrectGuesses.length);
    const correctPercentage = Math.trunc((this.turns - this.incorrectGuesses.length) / this.turns * 100);
    return correctPercentage;
  };

  endRound() {
    console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`)
  };

};

module.exports = Round;
