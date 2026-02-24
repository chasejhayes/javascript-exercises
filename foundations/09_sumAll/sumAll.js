// const sumAll = function(a, b) {
//     let sum = 0;
//     for (i=a; i<b; i++){
//         sum += a
//     }
//     return sum
// };

// console.log(sumAll(1,10))

   const sumAll = function (a, b) {
           let sum = 0;
            let bigger;
            let smaller;
    if (a < 0 || b < 0 || typeof(a) === 'string' || typeof(b) ==='string' || typeof(a)==='object' || typeof(b)==='object' ||  Number.isInteger(a) == false || Number.isInteger(b) == false ){
            return "ERROR"
        } else
            if (a>b) {
                bigger = a, 
                smaller = b;
            } else bigger = b, smaller = a
            for (i = smaller; i < (bigger+ 1); i++) {
                sum += i
            }
            return sum
        };





// Do not edit below this line
module.exports = sumAll;
