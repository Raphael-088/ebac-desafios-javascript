const somarMultiplos = require('./desafio3-multiplos');

test('deve retornar a soma correta dos múltiplos de 5 ou 7', () => {
    expect(somarMultiplos()).toBe(156361);
});