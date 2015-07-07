var
  Q = require('q');

function Calculator() {

}

Calculator.prototype.add = function (a, b) {
  return a + b;
};

Calculator.prototype.addAsync = function (a, b) {
  return Q.resolve(a + b);
};

module.exports = Calculator;