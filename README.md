# SolarTech

Sistema de gestao de usina solar com Express, Sequelize, MySQL e frontend em HTML, CSS e JavaScript.

## Executar

1. Instale o Node.js (versao 24 recomendada) e inicie o MySQL.
2. Crie o banco: `CREATE DATABASE IF NOT EXISTS db_solartech;`.
3. Na pasta `backend`, execute `npm ci`.
4. Copie `.env.example` para `.env` e preencha a senha do seu MySQL.
5. Ainda em `backend`, execute `npm start`. A API usa `http://localhost:3000` e cria as tabelas com Sequelize.
6. Abra `frontend/index.html` com a extensao Live Server do VS Code.
7. Cadastre um funcionario, faca login e use o menu.

## Operacoes

- Funcionario, equipamento e vistoria: cadastrar e listar.
- Cliente: cadastrar, consultar por ID ou nome, listar e apagar.
- Autenticacao: login e logout.

Cadastre primeiro o cliente, depois seu equipamento e depois a vistoria. Use os codigos mostrados nas listagens nos campos de relacionamento.

As requisicoes de exemplo estao em `backend/teste.http` para a extensao REST Client. Execute o login antes das rotas privadas. O token e retornado em `message.token` e enviado diretamente no cabecalho `Authorization`.

O frontend segue o modelo de arquivos separados do projeto [exercicio_cargas](https://github.com/SantiagoFidmay/exercicio_cargas), adaptado para as entidades e rotas deste sistema.

## Validacao

Frontend validado no Microsoft Edge com API simulada, incluindo login, logout e operacoes disponiveis. Essa validacao nao executou cadastros nem exclusoes no banco real.

## Configuracao local

A senha do banco nao esta no repositorio. O arquivo `.env` e as dependencias `node_modules` ficam somente na maquina de quem executa o projeto.
