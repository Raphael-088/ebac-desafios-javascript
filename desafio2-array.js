function encontrarIndices(numeros) {
    let indiceMaior = 0;
    let indiceMenor = 0;

    for (let i = 1; i < numeros.length; i++) {

        if (numeros[i] > numeros[indiceMaior]) {
            indiceMaior = i;
        }

        if (numeros[i] < numeros[indiceMenor]) {
            indiceMenor = i;
        }

    }

    return {
        indiceMaior,
        indiceMenor
    };
}

const numeros = [15, 8, 32, 4, 27];

const resultado = encontrarIndices(numeros);

console.log("Índice do maior valor:", resultado.indiceMaior);
console.log("Índice do menor valor:", resultado.indiceMenor);