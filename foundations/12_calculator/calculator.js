const add = function (a, b) {
  return a + b

};

const subtract = function (a, b) {
  return a - b;

};

const sum = function (number) {
  return number.reduce((start, current) => start + current, 0)
};

// const array = [1, 2, 3, 4];

// // 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue,
// );


const multiply = function (numbers) {
  return numbers.reduce((start, current) => start * current, 1)

};

const power = function (a, b) {
  return a ** b

};

const factorial = function (number) {
  let arr = [];

  for (let i = number; i > 0; i--) {
    arr.push(i)
  }

  return arr.reduce((start, current) => start*current, 1)
};




// for (let i=number; i> 0; i--){
//   return arr.push(i)
// }



// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
