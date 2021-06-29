const sumAll = function(num1, num2) {
    if (typeof num1 !== "number" || typeof num2 !== "number" || num1 < 0 || num2 < 0) {
        return "ERROR";
    }
    let max = num2;
    let min = num1;
    if (num1 > num2) {
        max = num1;
        min = num2;
    }

    let sum = 0
    for (let i = min; i <= max; i++) {
        sum += i;
    }

    return sum;
};

module.exports = sumAll;
