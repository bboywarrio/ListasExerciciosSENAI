const readlineSync = require('readline-sync');
var dolar = parseFloat(readlineSync.question("Insira o valor em dolares: "));
var conversao = dolar*3.80
console.log("Você tem "+dolar+"$ Dolares"+" e o equivalente de "+conversao+"R$ em Reais!");