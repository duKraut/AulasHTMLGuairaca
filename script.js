function calculadora(a, b, operacao) {
    if (operacao === 'soma') {
        return a + b;
    } if (operacao === 'subtracao') {
        return a - b;
    } if (operacao === 'multiplicacao') {
        return a * b;
    } if (operacao === 'divisao') {
        return a / b;
    } else {
        console.log("Operação inválida")
    }
}

console.log(calculadora(10, 20, 'soma'));
console.log(calculadora(10, 20, 'subtracao'));
console.log(calculadora(10, 20, 'multiplicação'));
console.log(calculadora(10, 20, 'divisao'));