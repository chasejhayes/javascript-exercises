const fibonacci = function (position) {
    let arr = [0, 1];
    let number = 0

    let positionNumber = Number(position);

    let fillArr = function () {
        for (i = 0; i < 30; i++) {
            number = arr.at(-1) + arr.at(-2);
            arr.push(number);

        }
    }

    fillArr();

    if (positionNumber < 0) {
        return "OOPS"
    } else {
        return arr[positionNumber];
    }



    // create an array of numbers in which each one is the sum of the two preceding ones
    // stop at 50 numbers
    // accepts strings
    // does not accept negatives

}

// Do not edit below this line
module.exports = fibonacci;


// for (let i = 0; i < 5; i++) {
// Add a value to the end of the array in each iteration
//   newArray.push(i * 2); 
// }