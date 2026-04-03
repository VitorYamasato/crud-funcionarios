Projeto simples de CRUD(Create, Read, Update, Delete):

Uma simples API feita para gerenciar funcionários podendo criar, editar, deletar e listar registros

Funcionalidades:
- Criar funcionario
- Listar funcionario
- Editar funcionario
- Deletar funcionario

O que foi utilizado e suas versões:
- Node.js v24.14.1
- Express v5.2.1
- MySQL v9.6.0
- mysql2 v3.20.0
- dotenv v17.4.0

Para rodar:
1 - Clone o repositorio
2 - Baixe as dependencias
3 - Configure o arquivo .env:
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=sua_senha
DB_NAME=lista
4 - Execute o projeto

## 🗄️ Banco de dados

Execute o script abaixo no MySQL:

CREATE DATABASE IF NOT EXISTS lista;
USE lista;
CREATE TABLE IF NOT EXISTS funcionarios (
id INT AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(100) NOT NULL,
salario DECIMAL(10,2) NOT NULL
);
