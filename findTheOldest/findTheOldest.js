const findTheOldest = function(people) {
    return people.reduce((oldestPerson, person) => {
        if (oldestPerson === undefined){
            oldestPerson = person;
        } else {
            let newAge = (person.yearOfDeath || new Date().getFullYear()) - person.yearOfBirth;
            let oldAge = (oldestPerson.yearOfDeath || new Date().getFullYear()) - oldestPerson.yearOfBirth;
            oldestPerson = (newAge > oldAge ? person : oldestPerson);
        }
        return oldestPerson;
    })
};

module.exports = findTheOldest;
