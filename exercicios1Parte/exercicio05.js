const readlineSync = require('readline-sync');
var salario;
var salario = parseFloat(readlineSync.question("Digite seu salario: "));
var aumento = salario + (salario * 0.15);
aumento = aumento.toFixed(2);
console.log("O Seu salário reajustado com um aumento de 15% ficou em "+ aumento+" R$");