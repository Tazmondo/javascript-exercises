const ftoc = function (tempF) {
    return parseInt((tempF - 32) * (5 / 9) * 10) / 10;
};

const ctof = function (tempC) {
    return parseInt((tempC * (9 / 5) + 32)*10)/10;
};

module.exports = {
    ftoc,
    ctof
};
