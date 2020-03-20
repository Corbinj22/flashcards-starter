const chai = require('chai');
const expect = chai.expect;
const assert = require('chai').assert;
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Round = require('../src/Round');
const Game = require('../src/Game');
let prototypeData = require('./data-test');
prototypeData = prototypeData.prototypeDataTest
describe('Game', function() {

// console.log(protoTypeData);

  let deck, round, game, card1, card2, card3;

  beforeEach(function() {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
    game = new Game(round.currentCard);
  });

  it.skip('should be a function', function() {
    expect(Game).to.be.a('function');
  });

  it.skip('should start with no rounds', function() {
    expect(game.currentRound).to.equal(null)
  });

  it.skip('should be able to create new cards', function() {
    expect(game.createCards(prototypeData)).to.deep.equal([
  {
    id: 1,
    question: 'What allows you to define a set of related information using key-value pairs?',
    answers: [ 'object', 'array', 'function' ],
    correctAnswer: 'object'
  },
  {
    id: 2,
    question: 'What is a comma-separated list of related values?',
    answers: [ 'array', 'object', 'function' ],
    correctAnswer: 'array'
  },
  {
    id: 3,
    question: 'What type of prototype method directly modifies the existing array?',
    answers: [ 'mutator method', 'accessor method', 'iteration method' ],
    correctAnswer: 'mutator method'
  },
  {
    id: 4,
    question: 'What type of prototype method does not modify the existing array but returns a particular representation of the array?',
    answers: [ 'mutator method', 'accessor method', 'iteration method' ],
    correctAnswer: 'accessor method'
  },
  {
    id: 5,
    question: 'What type of prototype method loops through the existing array and applies a callback function that may mutate each element and return a new value?',
    answers: [ 'mutator method', 'accessor method', 'iteration method' ],
    correctAnswer: 'iteration method'
  }
]
)
  });

  it.skip('should be able to create a new deck', function() {
    const cards = game.createCards(prototypeData);
    const deck = game.createDeck(cards);
    expect(game.createDeck(cards)).to.deep.equal(deck)
  });

  it.skip('should be able to create a new round', function() {
    const cards = game.createCards(prototypeData);
    const deck = game.createDeck(cards);
    const round = game.createRound(deck);
    expect(game.createRound(deck)).to.deep.equal(round)
  });

});
