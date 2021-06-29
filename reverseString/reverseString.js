const reverseString = function(inputString) {
    let splitString = inputString.split("");
    let outString = "";
    splitString.reverse().forEach((string) => outString += string);
    return outString;
};

module.exports = reverseString;
