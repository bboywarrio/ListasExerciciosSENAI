const readlineSync = require('readline-sync');
const readlineSync = require('readline-sync');
var celsiusconvert;
var fahrenheit = parseFloat(readlineSync.question("Digite a temperatura aferida em Fahrenheit: "));
var celsiusconvert = (fahrenheit-32)*5/9;
console.log("A temperatura convertida em celsius é  "+ celsiusconvert+" Graus");