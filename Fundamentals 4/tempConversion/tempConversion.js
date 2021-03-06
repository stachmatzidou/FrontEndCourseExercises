const ftoc = function(fahrenheit) {
  const celsius = Math.round((( fahrenheit - 32 ) * 5/9) * 10) / 10;
  return celsius;
}

const ctof = function(celsius) {
  const fahrenheit = Math.round((( celsius * 9/5 ) + 32) * 10) / 10;
  return fahrenheit;
}

module.exports = {
  ftoc,
  ctof
}
