const readlineSync = require('readline-sync');
var distancia = parseFloat(readlineSync.question("Digite a distancia da viagem(km): "));
var consumo = parseFloat(readlineSync.question("Digite quantos litros a cada km o veiculo consome [L/km]): "));
var litrosgasto = distancia/consumo;
console.log("Consumo em litros de "+distancia+"KM percorridos, foi de : "+litrosgasto+" Litros de gasolina gastos.");