const getTheTitles = function(books) {
    return books.reduce((titleArray, book) => titleArray = [...titleArray, book.title], []);
};

module.exports = getTheTitles;
