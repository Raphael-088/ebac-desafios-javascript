🚀 Desafios JavaScript e Testes Unitários - EBAC
Projeto desenvolvido como parte das atividades da EBAC, contemplando exercícios de JavaScript e implementação de testes unitários com Jest.

📋 Desafios Implementados
1️⃣ Cálculo do MDC (Máximo Divisor Comum)
Implementação do algoritmo de Euclides para determinar o MDC entre dois números inteiros.

Arquivo:

desafio1-mdc.js
2️⃣ Índice do Maior e Menor Valor
Dado um array numérico sem valores repetidos, identifica os índices do maior e do menor valor.

Arquivo:

desafio2-array.js
3️⃣ Soma dos Múltiplos
Calcula a soma de todos os múltiplos de 5 ou 7 abaixo de 1000.

Arquivo:

desafio3-multiplos.js
4️⃣ Validação de Cadastro de Usuário
Implementação de regras de negócio para validação de usuários.

Funcionalidades:

Verificar maioridade
Validar e-mail
Verificar situação do usuário
Validar cadastro completo
Arquivo:

usuario.js
🧪 Testes Unitários
O projeto utiliza o framework Jest para validação automatizada das regras implementadas.

Arquivos de Teste
desafio1-mdc.test.js
desafio2-array.test.js
desafio3-multiplos.test.js
usuario.test.js
Cenários Testados
verificarMaiorIdade()
✅ Idade igual a 17 anos

✅ Idade igual a 18 anos

validarEmail()
✅ E-mail válido

✅ E-mail inválido (sem @)

usuarioAtivo()
✅ Usuário ativo

✅ Usuário inativo

validarCadastro()
✅ Cadastro válido

✅ Reprovação por idade

✅ Reprovação por e-mail

✅ Reprovação por usuário inativo

Resultado Atual dos Testes
PASS usuario.test.js
PASS desafio1-mdc.test.js
PASS desafio2-array.test.js
PASS desafio3-multiplos.test.js

Test Suites: 4 passed, 4 total
Tests: 13 passed, 13 total
🛠 Tecnologias Utilizadas
JavaScript
Node.js
Jest
Git
GitHub
Visual Studio Code
▶️ Como Executar o Projeto
Clone o repositório:

git clone https://github.com/Raphael-088/ebac-desafios-javascript.git
Acesse a pasta do projeto:

cd ebac-desafios-javascript
Instale as dependências:

npm install
▶️ Executar os Exercícios
Desafio 1
node desafio1-mdc.js
Desafio 2
node desafio2-array.js
Desafio 3
node desafio3-multiplos.js
▶️ Executar os Testes
npm test
🌿 Branch Utilizada
exercicios/modulo-2
👨‍💻 Autor
Raphael Araújo

GitHub:

https://github.com/Raphael-088