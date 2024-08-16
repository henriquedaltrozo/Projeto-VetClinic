# Projeto VetClinic

Esse projeto foi desenvolvido com o objetivo de simular operações CRUD (Criar, Ler, Atualizar e Apagar) de uma clínica veterinária.

## Tecnologias

- Node.js
- JavaScript
- Express.js
- Sequelize ORM
- SQLite

## Requisitos

- Node.js
- NPM  
- DB Browser for SQLite (ou qualquer outra ferramenta similar) 

## Banco de Dados

É relacional e possui as tabelas Pet e Tutor. 

Pet possui os seguintes atributos: 
- id
- name
- species
- carry
- weight
- date_of_birth

Tutor possui os seguintes atributos: 
- id
- name
- phone
- email
- date_of_birth
- zip_code

## Configuração do Ambiente

### Arquivo `.env`

Apague a parte `.example` do arquivo `.env.exemplo` na raiz do projeto e adicione as variáveis de ambiente. Exemplo de .env:
```
PORT=3000
```

### Instalação

1. Clone o repositório:

   ```bash
   git clone https: https://github.com/henriquedaltrozo/Projeto-VetClinic.git
   cd Projeto-VetClinic
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Inicie o servidor:
   ```bash
   npm run dev
   ```

## Endpoints da API

### Pet

#### Operações

| Método | URL                           | Descrição                                                      |
| ------ | ----------------------------- | ---------------------------------------------------------------|
| POST   | /pet/:tutorId                 | Cadastrar pet: Cria um novo pet e define seu tutor             |
| PUT    | /pet/:petId/tutor/:tutorId    | Atualizar pet: Atualiza as informações de um pet existente     |
| DELETE | /pet/:petId/tutor/:tutorId    | Excluir pet: Deleta um pet existente                           |

### Tutor

#### Operações

| Método | URL                           | Descrição                                     |
| ------ | ----------------------------- | ----------------------------------------------|
| GET    | /tutors    | Listar tutores: Retorna a lista de tutores                       |
| POST   | /tutor     | Cadastrar tutor: Cria um novo tutor                              |
| PUT    | /tutor/:id | Atualizar tutor: Atualiza as informações de um usuário existente |
| DELETE | /tutor/:id | Excluir tutor: Exclui um tutor existente                         |

## Contato

Para mais informações, entre em contato com henrique.daltrozo.pb@compasso.com.br.

