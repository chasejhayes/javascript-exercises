const convertToCelsius = function(tempToC) {
  let c;
  c = (tempToC - 32) / (9/5);
  c = c.toFixed(1);
  return c = Number(c)
};

const convertToFahrenheit = function(tempToF) {
  let f;
  f = tempToF * 9/5 + 32;
  f = f.toFixed(1);
  return f = Number(f);
};



// let n = num.toFixed(2);
// var x = Number("1000")
// °F = °C * 9/5 + 32
// °C = (°F - 32) ÷ (9/5)


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
