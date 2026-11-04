const calcularMDC = require('./desafio1-mdc');

test('deve calcular o MDC entre 48 e 18', () => {
    expect(calcularMDC(48, 18)).toBe(6);
});