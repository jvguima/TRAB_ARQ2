// Constante para valor divisor de paridade
const DIVISOR_PAR = 2;

// Função que filtra os números pares de um array
function filtrarPares(array) {
    const pares = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % DIVISOR_PAR === 0) {
            pares.push(array[i]);
        }
    }
    return pares;
}

// Array de números de exemplo
const numeros = [1, DIVISOR_PAR, 3, 4, 5, 6];
const numerosPares = filtrarPares(numeros);
console.log(numerosPares);
