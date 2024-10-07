// função simples (declarativa)
function saudacao() {
    return console.log("olá mundo");
}

// função com parâmetros
function soma(valorA, valorB) {
    const totalSoma = valorA + valorB;
    return console.log(totalSoma);
}

//função anônima
const multiplicar = function (valorA, valorB) {
    const total = valorA * valorB;
    return console.log(total);
}

// arrow function
const dividir = (a, b) => a / b;

// função com valor padrão de parametro
function exponencial(base, expoente = 2) {
    const exp = base ** expoente;
    return console.log(exp);
}

// invocar as funções


//funçao de callback
function inicializarAplicacao() {
    saudacao();
    soma(10, 5);
    multiplicar(5, 5);
    exponencial(3);
    exponencial(3, 5);
    
    console.log(dividir(10, 2));
}

inicializarAplicacao();