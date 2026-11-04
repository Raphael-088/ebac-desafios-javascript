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

module.exports = encontrarIndices;