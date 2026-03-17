
````markdown
# User Management API 🚀

Uma API robusta para gerenciamento de usuários desenvolvida com **NestJS**, focada em performance e eficiência utilizando o gerenciador de pacotes **pnpm**.



## 📌 Sobre o Projeto

Este projeto é um CRUD (Create, Read, Update, Delete) completo para a entidade `User`. A aplicação segue os padrões de arquitetura modular do NestJS, facilitando a escalabilidade e manutenção do código.

## 🛠️ Tecnologias Utilizadas

* **Runtime:** Node.js (v18+)
* **Framework:** [NestJS](https://nestjs.com/)
* **Linguagem:** TypeScript
* **Gerenciador de Pacotes:** [pnpm](https://pnpm.io/)
* **Banco de Dados:** PostgreSQL / SQLite (ajuste conforme seu uso)

## 📁 Estrutura de Pastas

```text
src/
├── users/
│   ├── dto/            # Validação de dados (CreateUserDto, UpdateUserDto)
│   ├── entities/       # Definição da entidade User
│   ├── users.controller.ts
│   ├── users.module.ts
│   └── users.service.ts
├── app.module.ts
└── main.ts
````

## 🚀 Como Começar

### 1\. Clonar o repositório

```bash
git clone [https://github.com/seu-usuario/seu-repositorio.git](https://github.com/seu-usuario/seu-repositorio.git)
cd seu-repositorio
```

### 2\. Instalar as dependências

```bash
pnpm install
```

### 3\. Configuração do Ambiente

Crie um arquivo `.env` na raiz do projeto e configure suas variáveis:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/mydb"
PORT=3000
```

### 4\. Executar a aplicação

```bash
# Modo de desenvolvimento (com hot-reload)
pnpm run start:dev

# Build para produção
pnpm run build
pnpm run start:prod
```

## 🛣️ Endpoints da API

Abaixo estão as rotas principais para a gestão de usuários:

| Método | Endpoint | Descrição |
| :--- | :--- | :--- |
| **POST** | `/users` | Cria um novo usuário |
| **GET** | `/users` | Lista todos os usuários cadastrados |
| **GET** | `/users/:id` | Busca um usuário específico por ID |
| **PATCH** | `/users/:id` | Atualiza dados de um usuário existente |
| **DELETE** | `/users/:id` | Remove um usuário do sistema |

## 🧪 Testes

```bash
# Testes unitários
pnpm run test

# Testes de integração (e2e)
pnpm run test:e2e
```

-----

Desenvolvido por [Lucas Rossi](https://github.com/LucasMateus-2/)

```

---
