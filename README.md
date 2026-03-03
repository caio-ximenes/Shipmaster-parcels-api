# Shipmaster API

Este projeto faz parte de um sistema de gestão de encomendas para condomínios, desenvolvido como um **projeto de estudo** focado no aprendizado básico de criação de APIs com Node.js e manipulação de banco de dados.

## 🚀 Tecnologias Utilizadas

- **[Node.js](https://nodejs.org/)**: Ambiente de execução JavaScript.
- **[Express](https://expressjs.com/)**: Framework web para gerenciamento das rotas HTTP.
- **[Prisma](https://www.prisma.io/)**: ORM moderno para conectar e realizar operações no banco de dados.
- **[MongoDB](https://www.mongodb.com/)**: Banco de dados NoSQL utilizado para persistência dos dados.

## 🛠️ Como executar o projeto localmente

### Pré-requisitos
- **Node.js** instalado na sua máquina.
- Uma URI de conexão com um banco **MongoDB** (pode ser o MongoDB Atlas gratuito).

### Passos para rodar a aplicação

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/caio-ximenes/Shipmaster-api.git
   cd Shipmaster-api
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Configure o Banco de Dados:**
   Crie um arquivo `.env` na raiz do projeto e adicione a URL de conexão do MongoDB:
   ```env
   DATABASE_URL="SuaStringDeConexaoDoMongoDB"
   ```

4. **Gere o Prisma Client:**
   ```bash
   npx prisma generate
   ```

5. **Inicie o servidor:**
   ```bash
   npm start
   ```
   *O servidor iniciará, por padrão, na porta 3000: `http://localhost:3000`*

## 📦 Rotas da API (CRUD de Encomendas)

A API possui as seguintes rotas principais para gerenciar as `Encomendas`:

- **GET** `/` : Lista todas as encomendas cadastradas.
- **GET** `/encomendas/:id` : Busca e retorna uma encomenda específica pelo seu \`id\`.
- **POST** `/encomendas` : Cria o registro de uma nova encomenda (envie os dados no corpo da requisição).
- **PUT** `/encomendas/:id` : Atualiza os dados de uma encomenda existente.
- **DELETE** `/encomendas/:id` : Remove uma encomenda do banco de dados.

---
*Projeto criado com o objetivo de fixar conhecimentos básicos em arquitetura backend, criação de APIs RESTful e interações básicas com banco de dados usando Node.js.*
