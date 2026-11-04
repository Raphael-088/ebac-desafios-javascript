function somarMultiplos() {
    let soma = 0;

    for (let numero = 1; numero < 1000; numero++) {

        if (numero % 5 === 0 || numero % 7 === 0) {
            soma += numero;
        }
    }

    return soma;
}

module.exports = somarMultiplos;