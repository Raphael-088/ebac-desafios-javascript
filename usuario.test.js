const {
    verificarMaiorIdade,
    validarEmail,
    usuarioAtivo,
    validarCadastro
} = require('./usuario');

describe('Cadastro de Usuário', () => {

    test('deve rejeitar usuário com 17 anos', () => {
        expect(verificarMaiorIdade(17)).toBe(false);
    });

    test('deve aceitar usuário com 18 anos', () => {
        expect(verificarMaiorIdade(18)).toBe(true);
    });

    test('deve validar email correto', () => {
        expect(validarEmail('raphael@email.com')).toBe(true);
    });

    test('deve rejeitar email sem @', () => {
        expect(validarEmail('raphaelemail.com')).toBe(false);
    });

    test('deve validar usuário ativo', () => {
        expect(usuarioAtivo(true)).toBe(true);
    });

    test('deve rejeitar usuário inativo', () => {
        expect(usuarioAtivo(false)).toBe(false);
    });

    test('deve aceitar cadastro válido', () => {
        const usuario = {
            nome: 'Raphael Araujo',
            email: 'raphael@email.com',
            idade: 25,
            ativo: true
        };

        expect(validarCadastro(usuario)).toBe(true);
    });

    test('deve rejeitar cadastro por idade', () => {
        const usuario = {
            nome: 'Raphael Araujo',
            email: 'raphael@email.com',
            idade: 17,
            ativo: true
        };

        expect(validarCadastro(usuario)).toBe(false);
    });

    test('deve rejeitar cadastro por email inválido', () => {
        const usuario = {
            nome: 'Raphael Araujo',
            email: 'emailinvalido.com',
            idade: 25,
            ativo: true
        };

        expect(validarCadastro(usuario)).toBe(false);
    });

    test('deve rejeitar cadastro por usuário inativo', () => {
        const usuario = {
            nome: 'Raphael Araujo',
            email: 'raphael@email.com',
            idade: 25,
            ativo: false
        };

        expect(validarCadastro(usuario)).toBe(false);
    });

});