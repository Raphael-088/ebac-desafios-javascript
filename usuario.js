function verificarMaiorIdade(idade) {
    return idade >= 18;
}

function validarEmail(email) {
    return email.includes('@');
}

function usuarioAtivo(ativo) {
    return ativo === true;
}

function validarCadastro(usuario) {
    return (
        verificarMaiorIdade(usuario.idade) &&
        validarEmail(usuario.email) &&
        usuarioAtivo(usuario.ativo)
    );
}

module.exports = {
    verificarMaiorIdade,
    validarEmail,
    usuarioAtivo,
    validarCadastro
};