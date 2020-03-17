class Turn {
  constructor(userGuess, card) {
    this.userGuess = userGuess;
    this.currentCard = card
  }

  returnGuess() {
    return this.userGuess;
  };

  returnCard() {
    return this.currentCard
  };

  evaluteGuess() {
    if (this.userGuess === this.currentCard.correctAnswer) {
      return true;
    } else {
      return false;
    }
  };

  giveFeedback() {
    // if (evaluteGuess) {
    //   return "Correct!"
    // } else {
    //   return "Incorrect!"
    // }
  };

};


module.exports = Turn;
