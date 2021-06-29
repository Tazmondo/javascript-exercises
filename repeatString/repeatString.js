const repeatString = function(baseString, repeatCount) {
    if (repeatCount < 0) {
        return "ERROR";
    }
    let outputString = "";
    for (let i=0; i < repeatCount; i++) {
        outputString += baseString;
    }
    return outputString;

};

module.exports = repeatString;
