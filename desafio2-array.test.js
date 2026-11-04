const encontrarIndices = require('./desafio2-array');

test('deve retornar os índices do maior e menor valor', () => {

    const resultado = encontrarIndices([15, 8, 32, 4, 27]);

    expect(resultado.indiceMaior).toBe(2);
    expect(resultado.indiceMenor).toBe(3);

});