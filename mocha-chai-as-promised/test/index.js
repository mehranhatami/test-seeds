'use strict';

var Calculator = require('../calculator');

var chai = require('chai'),
  chaiAsPromised = require('chai-as-promised');

chai.config.includeStack = true;

chai.use(chaiAsPromised);

global.expect = chai.expect;
global.AssertionError = chai.AssertionError;
global.Assertion = chai.Assertion;
global.assert = chai.assert;

describe('When adding one and two using the calculator', function () {
  var calculator;

  before(function () {
    calculator = new Calculator();
  });

  it('var result = calculator.add(a, b)', function () {
    var result = calculator.add(1, 2);
    expect(result).equal(3);
  });

  it('calculator.addAsync(a, b).then(function(result){ ... });', function (done) {
    var resultPromise = calculator.addAsync(1, 2);

    console.log('resultPromise.should:', resultPromise.should);

    resultPromise
      .then(function (result) {
        expect(result).equal(3);
        done();
      });
  });

  // it('should.equal API', function (done) {
  //   (2 + 2).should.equal(4);
  // });
});