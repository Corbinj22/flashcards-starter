const chai = require('chai');
const expect = chai.expect;
const assert = require('chai').assert;
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Round = require('../src/Round');

describe('Round', function() {

  it.skip('should be a function', function() {
    const round = new Round();

    expect(Round).to.be.a('function');
  });

  it.skip('should be an instance of round', function() {
    const round = new Round();

    expect(round).to.be.an.instanceof(Round);
  });

  it.skip('should start with a full deck of cards', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const deck = new Deck([card1, card2, card3])
    const round = new Round(deck)

    expect(deck.cards).to.have.deep.members([card1, card2, card3]);
  });

  it.skip('should store be able to keep track of turns', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const deck = new Deck([card1, card2, card3])
    const round = new Round(deck)

      assert.equal(round.turns, 0);
  });

  it.skip('should store be able to store incorrect guesses', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const deck = new Deck([card1, card2, card3])
    const round = new Round(deck)

      assert.deepEqual(round.incorrectGuesses, []);
  });

  it.skip('should be able to keep track of the current card', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const deck = new Deck([card1, card2, card3])
    const round = new Round(deck)

    round.returnCurrentCard();

    assert.deepEqual(round.returnCurrentCard(), deck.cards[0]);
  });

  it.skip('it should instantiate a new turn', function() {
    const stub = {
      userGuess: 'sea otter',
      currentCard: {
        id: 1,
        question: "What is Robbie's favorite animal",
        answers: [ 'sea otter', 'pug', 'capybara' ],
        correctAnswer: 'sea otter'
      }
    }

    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const deck = new Deck([card1, card2, card3])
    const round = new Round(deck)
    const turn = round.takeTurn('sea otter').turn;

    expect(turn).to.deep.equal(stub)
  });

  it.skip('should add turn for each guess', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const deck = new Deck([card1, card2, card3])
    const round = new Round(deck)

    round.takeTurn('sea otter');

    assert.equal(round.turns, 1);
  });

  it.skip('should add multiple turns', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const deck = new Deck([card1, card2, card3])
    const round = new Round(deck)

    round.takeTurn('capybara');
    round.takeTurn('pug');
    round.takeTurn('sea otter');

    assert.equal(round.turns, 3);
  });

  it.skip('should have a new current card', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const deck = new Deck([card1, card2, card3])
    const round = new Round(deck)

    round.takeTurn('sea otter');

    const current = round.returnCurrentCard()

    assert.equal(current, card2)
  });

  it.skip('should be able to evaluate guesses', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const deck = new Deck([card1, card2, card3])
    const round = new Round(deck)

    const status = round.takeTurn('sea otter');

    assert.equal(status.guessStatus, true);
  });

  it.skip('should be able to give feedback', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const deck = new Deck([card1, card2, card3])
    const round = new Round(deck)

    const status = round.takeTurn('sea otter');

    assert.equal(status.guessFeedback, "Correct!");
  });

  it.skip('should store incorrect guesses', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const deck = new Deck([card1, card2, card3])
    const round = new Round(deck)

    round.takeTurn('pug');

    assert.deepEqual(round.incorrectGuesses, [1]);
  })

  it.skip('should calculate the percentage of correct answers', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const deck = new Deck([card1, card2, card3])
    const round = new Round(deck)

    round.takeTurn('pug');
    round.takeTurn('gallbladder');
    const correctPercentage = round.calculatePercentCorrect()
    assert.equal(correctPercentage , 50)
  })

  it.skip('should notify the user what percentage they got right', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const deck = new Deck([card1, card2, card3])
    const round = new Round(deck)


    round.takeTurn('sea otter');
    round.takeTurn('gallbladder');
    round.takeTurn('Fitzgerald');

    const correctPercentage = round.endRound()

    assert.equal(correctPercentage ,'** Round over! ** You answered 100% of the questions correctly!')
  });

});
