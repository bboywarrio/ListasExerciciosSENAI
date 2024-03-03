const readlineSync = require('readline-sync');
var inputNumero = parseFloat(readlineSync.question("Digite o numero: "));

var numero = {
    algorismo: inputNumero,
    quadrado: function() {
        return this.algorismo * this.algorismo;
    },
    raizquadrada: function() {
        return Math.sqrt(this.algorismo);
    }
};

console.log("O numero escolhido foi: " + numero.algorismo + ", o quadrado é " + numero.quadrado() + ", a raiz quadrada é " + numero.raizquadrada());
