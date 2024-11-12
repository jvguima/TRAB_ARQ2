// Constantes para valores específicos do array
const NUM_IMPAR_1 = 1;
const NUM_PAR_2 = DIVISOR_PAR;
const NUM_IMPAR_3 = 3;
const NUM_PAR_4 = 4;
const NUM_IMPAR_5 = 5;
const NUM_PAR_6 = 6;

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

// Array de números de exemplo usando as constantes
const numeros = [NUM_IMPAR_1, NUM_PAR_2, NUM_IMPAR_3, NUM_PAR_4, NUM_IMPAR_5, NUM_PAR_6];
const numerosPares = filtrarPares(numeros);
console.log(numerosPares);
