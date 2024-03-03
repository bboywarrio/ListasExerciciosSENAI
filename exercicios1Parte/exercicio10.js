const readlineSync = require('readline-sync');
var valor = parseFloat(readlineSync.question("Digite o valor : "));
var taxa = parseFloat(readlineSync.question("Digite a taxa: "));
var dias = parseFloat(readlineSync.question("Digite os dias em atraso: "));

var prestacao = valor+(valor*(taxa/100)*dias);

console.log("Sua prestação em atraso de "+dias+"dias Encontra-se com valor de "+prestacao+"R$.  Valor Original:["+valor+"R$]*valor original sem atraso!")