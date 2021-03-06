class Turn {
  constructor(userGuess, card) {
    this.userGuess = userGuess;
    this.currentCard = card
    this.status = null;
  }

  returnGuess() {
    return this.userGuess;
  }

  returnCard() {
    return this.currentCard
  }

  evaluteGuess() {
    if (this.userGuess === this.currentCard.correctAnswer) {
      return true;
    } else {
      return false;
    }
  }

  giveFeedback() {
    if (this.evaluteGuess()) {
      return "Correct!"
    } else {
      return "Incorrect!"
    }
  }

}


module.exports = Turn;
