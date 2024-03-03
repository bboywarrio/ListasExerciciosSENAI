const readlineSync = require('readline-sync');

// Pede ao usuário para fornecer informações
var nome = readlineSync.question("Digite seu nome:");
var sobrenome = readlineSync.question("Digite seu sobrenome:");
var idade = readlineSync.question("Digite sua idade:");// Teste deixei por ter ficado manerin 
var sexo = readlineSync.question("Digite seu sexo:");

// Cria um objeto pessoa para ser chamado posteriormente(mt parecido com struct)
var pessoa = {
    nome: nome,
    sobrenome: sobrenome,
    idade: idade,
    sexo: sexo
};


console.log("Nome: " + pessoa.nome);
console.log("Sobrenome: " + pessoa.sobrenome);
console.log("Idade: " + pessoa.idade);
console.log("Sexo: " + pessoa.sexo);
