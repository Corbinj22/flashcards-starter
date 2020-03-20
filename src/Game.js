const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

class Game {
  constructor() {
    this.currentRound = null;
  }

  start() {
    const cards = this.createCards(prototypeQuestions);
    const deck = this.createDeck(cards)
    const round = this.createRound(deck)
    this.currentRound = round;
    this.printMessage(deck, round)
    this.printQuestion(round)
  }

  createCards(prototypeQuestions) {
    const cards = prototypeQuestions.map(question => question = new Card(question.id, question.question, question.answers, question.correctAnswer));
    return cards;
  }

  createDeck(cards) {
    const deck = new Deck(cards);
    return deck;
  }

  createRound(deck) {
    const round = new Round(deck);
    return round;
  }

  printMessage(deck) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
  -----------------------------------------------------------------------`)
  }

  printQuestion(round) {
    util.main(round);
  }

}

module.exports = Game;
