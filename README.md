# Projeto-VetClinic

Esse projeto foi desenvolvido com o objetivo de simular operações básicas CRUD (Criar, Ler, Atualizar e Excluir) de uma clínica veterinária.

## Tecnologias

- Node.js
- Express.js
- ORM Sequelize
- SQLite
- Dotenv

## Requisitos

- Node.js
- npm 
- DB Browser for SQLite

## Banco de Dados

O banco é relacional e possui as tabelas Pet e Tutor. Pet possui os seguintes dados: 
- id
- name
- species
- carry
- weight
- date_of_birth

Tutor possui os seguintes dados: 
- id
- name
- phone
- email
- date_of_birth
- zip_code

## Instalação

### 1. Clone o repositório para sua máquina local:

```
https://github.com/henriquedaltrozo/Projeto-VetClinic.git
```
### 2. Acesse o diretório do projeto.

### 3. Instale as dependências necessárias:

  ```
  npm install
  ```
### 4. Configure as variáveis de ambiente no arquivo .env.example:
- A porta deve ser especificada na variável de ambiente DB_PORT. O padrão é 3000.
- O caminho do banco deve ser especificado na variável de ambiente DB_URL. O padrão é "./db/app.db".
  
## Funcionalidades
### 1. API

Para iniciar a API, execute o seguinte comando:

```
npm run dev
```

### 2. Endpoints e Exemplos de Uso

 - GET "/tutors": Lista todos os tutores.
   ![printGet1](https://github.com/henriquedaltrozo/Projeto-VetClinic/assets/142446846/10bcdbd3-11de-4b93-aa2d-69c43df1aee3)
 - Resposta:
   ![printGetResp](https://github.com/henriquedaltrozo/Projeto-VetClinic/assets/142446846/a0d3270c-4f39-4870-bf7e-cb4f7497bbf7)

 - POST "/tutor": Cria um novo tutor.
   ![printPostTutor](https://github.com/henriquedaltrozo/Projeto-VetClinic/assets/142446846/3c2a6d3b-9ccb-401c-a004-2ea0c17cca1f)
 - Resposta:
   ![printPostTutorResp](https://github.com/henriquedaltrozo/Projeto-VetClinic/assets/142446846/e103e578-ef4b-4252-aa0c-fd2b714f7fd9)
   
 - POST "/pet/:tutorId": Cria um pet e adiciona um tutor a ele.
   ![printPostPet](https://github.com/henriquedaltrozo/Projeto-VetClinic/assets/142446846/417f8265-5a06-4269-bf80-e5733c00534f)
 - Resposta:
   ![printPostPetResp](https://github.com/henriquedaltrozo/Projeto-VetClinic/assets/142446846/b57530c4-7698-4226-8c0e-f7ec4392018e)

 - PUT "/tutor/:id": Atualiza um tutor existente.
   ![printPutTutor](https://github.com/henriquedaltrozo/Projeto-VetClinic/assets/142446846/aaa4f5b0-a6f3-4b5c-8d45-79f75292af0a)
 - Resposta:
   ![printPutTutorResp](https://github.com/henriquedaltrozo/Projeto-VetClinic/assets/142446846/ee2d13c0-a771-4ad7-ade9-710ffddab359)

 - PUT "/pet/:petId/tutor/:tutorId": Atualiza as informações de um pet.
   ![printPutPet](https://github.com/henriquedaltrozo/Projeto-VetClinic/assets/142446846/e9df7ee8-30de-4431-8ac7-e49c4c4df9b5)
 - Resposta:
   ![printPutPetResp](https://github.com/henriquedaltrozo/Projeto-VetClinic/assets/142446846/3c5228c5-a559-4648-849b-e19017333334)

 - DELETE "/tutor/:id": Deleta um tutor.
   ![printDeleteTutor](https://github.com/henriquedaltrozo/Projeto-VetClinic/assets/142446846/14cb9a61-2c4b-4db6-98e3-67bffae3741c)
 - Resposta:
   ![printDeleteTutorResp](https://github.com/henriquedaltrozo/Projeto-VetClinic/assets/142446846/43d1b26d-fffc-4a64-9c2d-1540ed3b75bb)
 
 - DELETE "/pet/:petId/tutor/:tutorId": Deleta um pet de um tutor.
   ![printDeletePet](https://github.com/henriquedaltrozo/Projeto-VetClinic/assets/142446846/90425ed6-0742-4809-83ec-91315ea41360)
 - Resposta:
   ![printDeletePetResp](https://github.com/henriquedaltrozo/Projeto-VetClinic/assets/142446846/748f8567-1c29-4e5d-a5ea-a33fadbdede6)


