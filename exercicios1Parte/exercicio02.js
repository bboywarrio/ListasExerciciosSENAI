const readlineSync = require('readline-sync');
var a = parseFloat(readlineSync.question("Digite o valor de a: "));
var b = parseFloat(readlineSync.question("Digite o valor de b: "));
var c = parseFloat(readlineSync.question("Digite o valor de c: "));
var d = parseFloat(readlineSync.question("Digite o valor de d: "));


var soma = a+b+c+d
var multiplicacao = a*b*c*d
console.log("A Soma é = "+ soma +" A multiplicação é = "+multiplicacao);
