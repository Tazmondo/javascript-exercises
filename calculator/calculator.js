const add = function (a, b) {
    return a + b;
};

const subtract = function (a, b) {
    return a - b;
};

const sum = function (numberArray) {
    return numberArray.reduce((total, value) => total += value, 0);
};

const multiply = function (numberArray) {
    return numberArray.reduce((total, value) => total *= value, 1);
};

const power = function (a, b) {
    return a**b;
};

const factorial = function (number) {
    if (number <= 1) return 1;

    return number * factorial(number-1)
};

module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial
};
