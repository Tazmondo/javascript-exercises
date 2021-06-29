const removeFromArray = function (inputArray, ...itemsToRemove) {
    let outArray = [];
    inputArray.forEach((value) => {
        if (!itemsToRemove.includes(value)) {
            outArray.push(value)
        }
    });

    return outArray;
};

module.exports = removeFromArray;
