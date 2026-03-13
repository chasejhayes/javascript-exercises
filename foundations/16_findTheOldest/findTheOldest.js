const people = [
            {
                name: "Carly",
                yearOfBirth: 1066,
            },
            {
                name: "Ray",
                yearOfBirth: 1962,
                yearOfDeath: 2011,
            },
            {
                name: "Jane",
                yearOfBirth: 1912,
                yearOfDeath: 1941,
            },
        ]


const findTheOldest = function (people) {

    const noDeathDate = (x) => x.yearOfDeath === undefined;
    const hasDeathDate = (x) => x.yearOfDeath > 0;

    let knownAgeArr = people.filter(hasDeathDate);
    let unknownAgeArr = people.filter(noDeathDate)

    let newDeathDate = new Date().getFullYear();

    let newlyKnownAgeArr = unknownAgeArr.map(x => {
        return { ...x, yearOfDeath: newDeathDate }
    })


    let finalFullArray = knownAgeArr.concat(newlyKnownAgeArr);

    let newArr = finalFullArray.map(x => ({
        ...x, age: (x.yearOfDeath - x.yearOfBirth
        )
    }))

    let oldest = newArr.sort((a, b) => a.age < b.age ? 1 : -1);
    return oldestPerson = oldest[0];
}

console.log(findTheOldest(people).name)

// add a death date to those people who don't have one




// Given an array of objects representing people with a birth and death year, return the oldest person.
// - One of the tests checks for people with no death-date.. use JavaScript's Date function to get their age as of today.


// Do not edit below this line
module.exports = findTheOldest;
