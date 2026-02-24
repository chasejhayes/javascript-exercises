//   let arr = [1,2,3,4,5,6,7]
  
//   const removeFromArray = function(arr, ...remove){
//     arr = remove.filter(newArr => (newArr !== remove))
//     return arr;
// };

//   const removeFromArray = function(arr, ...removeArray){
//         let newArray = exampleArray.filter(individualElementofArray => !removeArray.includes(individualElementofArray))
//         return newArray; 
//     }


const removeFromArray = function(arr, ...remove){
        let newArray = arr.filter(arg => !remove.includes(arg))
        return newArray; 
    }



// loop through the argument array comparing to filter

// Do not edit below this line
module.exports = removeFromArray;
