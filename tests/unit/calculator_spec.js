var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('it should be able to add 1 and 4 to get 5', function(){
    calculator.numberClick(1);
    calculator.operatorClick('+');
    calculator.numberClick(4);
    calculator.operatorClick('=');

    assert.equal(5, calculator.previousTotal);
  })

  it('it should be able to subtract 4 from 7 to get 3', function(){
    calculator.numberClick(7);
    calculator.operatorClick('-');
    calculator.numberClick(4);
    calculator.operatorClick('=');

    assert.equal(3, calculator.previousTotal);
  })

  it('it should be able to multiply 3 and 5 to get 15', function(){
    calculator.numberClick(3);
    calculator.operatorClick('*');
    calculator.numberClick(5);
    calculator.operatorClick('=');

    assert.equal(15, calculator.previousTotal);
  })

  it('it should be able to divide 21 by 7 to get 3', function(){
    calculator.numberClick(2);
    calculator.numberClick(1);
    calculator.operatorClick('/');
    calculator.numberClick(7);
    calculator.operatorClick('=');

    assert.equal(3, calculator.previousTotal);
  })

  it('it should be able to concatenate multiple button number clicks', function(){
    calculator.numberClick(5);
    calculator.numberClick(5);
    calculator.numberClick(5);

    assert.equal(555, calculator.runningTotal)
  })

  it('it should be able to chain operations together', function(){
    calculator.numberClick(4);
    calculator.operatorClick('*');
    calculator.numberClick(3);
    calculator.operatorClick('*');
    calculator.numberClick(2);
    calculator.operatorClick('+');
    calculator.numberClick(6);

    calculator.operatorClick('=');

    assert.equal(30, calculator.previousTotal)
  })

  it('it should be able to hit Clear without affecting the calculation', function() {
    calculator.numberClick(3);
    calculator.operatorClick('+');
    calculator.numberClick(7);
    calculator.operatorClick('+');
    assert.equal(10, calculator.previousTotal);

    calculator.numberClick(5);
    assert.equal(10, calculator.previousTotal);

    calculator.clearClick();
    assert.equal(10, calculator.previousTotal)

    calculator.operatorClick('+');
    calculator.numberClick(1);
    calculator.numberClick(0);
    calculator.operatorClick('=');

    assert.equal(20, calculator.previousTotal);
  })

});
