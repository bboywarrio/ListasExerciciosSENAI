const readlineSync = require('readline-sync');


var numero;

while (true) {
    
    numero = parseFloat(readlineSync.question("Digite um numero inteiro: "));

   
    if (Number.isInteger(numero)) {
        break; 
    } else {
        console.log("Por favor, digite um numero inteiro válido!(Somente aceito números inteiros).");
    }
}


var antecessor = numero - 1;
var sucessor = numero + 1;

console.log("O antecessor de " + numero + " é " + antecessor);
console.log("O sucessor de " + numero + " é " + sucessor);
