const { logMsg } = require('../logger');

const add = (a, b) => {
  var result = parseInt(a + b);
  logMsg(result);
  return result;
};
const subtract = (a, b) => {
  var result = parseInt(a - b);
  logMsg(result);
  return result;
};
const multiply = (a, b) => {
  var result = parseInt(a * b);
  logMsg(result);
  return result;
};
const divide = (a, b) => {
  var result = parseFloat(a / b);
  logMsg(result);
  return result;
};

module.exports = { add, subtract, multiply, divide };
