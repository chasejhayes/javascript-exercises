const leapYears = function(isItLeapYear) {
    if (isItLeapYear%400 == 0){
        return true
    } else if (isItLeapYear%100==0 && isItLeapYear%4 == 0){
        return false
    } else if (isItLeapYear%4 == 0) {
        return true
    } else {
        return false
    }
};

// leap year/4 == true
// leap year/100 == false
// leap year/400 == true
// 1900 is 

// Do not edit below this line
module.exports = leapYears;
