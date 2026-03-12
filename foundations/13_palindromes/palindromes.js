
// const palindromes = function (string) {
//     let stringOne = string.toLowerCase().split("");
//     stringOne = stringOne.filter((item)=>{
//         if (item == "." || item == "," || item == "!"){
//             return false
//         } else {
//             return true
//         }
//     })
//     console.log(stringOne)
//     console.log(stringOne)
//     let stringTwo = string.toLowerCase().split("").reverse();
//     console.log(stringTwo)
//     stringOne = stringOne.toString();
//     stringTwo = stringTwo.toString()
//     console.log(stringTwo)
//     return stringOne == stringTwo ? true : false
// };


const palindromes = function (string) {
    let arrOne = string.toLowerCase().split("");
    let arrOneFiltered = arrOne.filter((item) => {
        if (item == "." || item == "," || item == "!" || item == " ") {
            return false
        } else {
            return true
        }
    })

    let arrTwo = [...arrOneFiltered]
    arrTwo = arrTwo.reverse();

    arrOneFiltered = arrOneFiltered.join("");
    arrTwo = arrTwo.join("");

    console.log(arrOneFiltered);
    console.log(arrTwo);

    return arrOneFiltered == arrTwo ? true : false;

}


// convert string into an array and assign to variable
// verse the array and assign to second variable
// compare the two


// Do not edit below this line
module.exports = palindromes;
