const palindromes = function (text) {
    let alphabet = "qwertyuiopasdfghjklzxcvbnm".split("");
    let filteredText = Array.from(text.toLowerCase())
        .filter(char => alphabet.includes(char))
        .reduce((compoundText, char) => compoundText += char, "");

    let backwardsText = Array.from(filteredText)
        .reverse()
        .reduce((compoundText, char) => compoundText += char, "");

    return backwardsText === filteredText;


};

module.exports = palindromes;
