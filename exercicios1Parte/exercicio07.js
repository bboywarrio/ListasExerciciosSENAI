const readlineSync = require('readline-sync');


function calcularMediaAritmetica(a, b, c) {
    return (a + b + c) / 3;
}


function solicitarNumeros() {
    var input = readlineSync.question("Digite 3 numeros para o calculo da media aritmetica (separados por espacos): ");
    var numeros = input.split(" ").map(parseFloat);
    if (numeros.length !== 3 || numeros.some(isNaN)) {
        console.log("Por favor, forneça exatamente três números válidos.");
        return solicitarNumeros(); // Pedir novamente os números
    }
    return numeros;
}


var [a, b, c] = solicitarNumeros();
var mediaAritmetica = calcularMediaAritmetica(a, b, c);

console.log("A média aritmética dos 3 números é = " + mediaAritmetica);
