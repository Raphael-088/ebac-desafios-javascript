function calcularMDC(numero1, numero2) {
    while (numero2 !== 0) {
        let resto = numero1 % numero2;
        numero1 = numero2;
        numero2 = resto;
    }

    return numero1;
}

module.exports = calcularMDC;