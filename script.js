var nome = "Palmeiras";
let idade = 25;
const cidade = "São Paulo";

console.log("Nome é: ", nome);
console.log("Idade é: ", idade);
console.log("Cidade é: ", cidade);

// exemplo de objeto
const pessoa = {
    nome: "Eduardo",
    idade: 20,
    sexo: "masculino",
    telefone:"(42) 98888-5324"
}

console.log(pessoa);

let cachorro = {
    nome: 'caramelo',
    idade: 5,
    vacinado: false
}

cachorro.nome = "Banzé";
cachorro.vacinado = true;

console.log(cachorro);

// concatenação de strings
let nomeCompleto = "Eduardo Krautchuk";
let message = "Bem Vindo " + nomeCompleto + " ao sistema";

console.log(message);

// operações com numbers
let a = 25;
let b = 30;

let total = a + b;
console.log("O total é: ", total);

// conversão para string
let turma = 1;
let turmaFormatado = String(turma);
console.log(turmaFormatado);

// Conversão para number
let telefone = "42999999999";
let telefoneFormatado = Number(telefone);
console.log(telefoneFormatado);

//loop(while)
let contador = 0
while (contador < 5) {
    console.log("o contador é", contador)
    contador++;
    
}