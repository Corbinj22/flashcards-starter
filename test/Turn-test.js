const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
const Turn = require('../src/Turn');
const Card = require('../src/Card');


describe('Turn', function() {
  it('should be a function', function() {
    const turn = new Turn();

    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();

    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should return guess of user', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);

    turn.returnGuess();

    assert.deepEqual(turn.returnGuess(), "object");
  });

  it('should return current card of user', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);

    turn.returnCard();

    expect(turn.returnCard()).to.equal(card);
  });

  it('should check to see if user guess is correct', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);

    turn.evaluteGuess();

    expect(turn.evaluteGuess()).to.equal(true);
  });

  it('should give feedback if the answer is correct(or not)', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);

    turn.giveFeedback();

    expect(turn.giveFeedback()).to.equal("Correct!");
  })


});