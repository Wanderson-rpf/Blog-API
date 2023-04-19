
# :closed_lock_with_key: Blogs API

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

Este projeto foi realizado no curso de desenvolvimento Web da Trybe, a proposta deste é, gerenciar usuários na criação de posts de um blog, onde é feito login e gerado um token, após isso é validado o usuario logado atraves de token, definindo assim se o mesmo esta autorizado na edição e exclusão de posts do blog.

Para este serviço criei uma API REST e usei a arquitetura MSC (Model, Service e Controller) na organizar as camadas da API, o token é gerado e validado com JWT (Json Web Token).

---

## 🛠️ Construído com

- Modelo MSC (Model, Service e Controller)
- API Rest
- Docker
- Express
- JWT (Jason Web Token)
- TypeScript
- MySQL

---

## 🚀 Documentação da API

### Realizando login

```http
POST /login
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `email` | `string` | **Obrigatório**. Email valido e existente no banco de dados |
| `senha` | `string` | **Obrigatório**. No minimo 6 dígitos |

<details><summary>Exemplo de Entrada:</summary></br>

```json
{
  "email": "lewishamilton@gmail.com",
  "password": "123456"
}
```

</details>

<details><summary>Exemplo de retorno:</summary></br>

Em caso de sucesso (status 200):
```json
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjoxLCJkaXNwbGF5TmFtZSI6Ikxld2lzIEhhbWlsdG9uIiwiZW1haWwiOiJsZXdpc2hhbWlsdG9uQGdtYWlsLmNvbSIsImltYWdlIjoiaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy8xLzE4L0xld2lzX0hhbWlsdG9uXzIwMTZfTWFsYXlzaWFfMi5qcGcifSwiaWF0IjoxNjgxOTExOTY1LCJleHAiOjE2ODI1MTY3NjV9.zpc2tktRB7ScbZP8JDkMrcJ4yPPIbtdaTxC2__o__8E"
}
```

Em caso de erro (status 400):
```json
{
    "message": "Some required fields are missing"
}
```
ou
```json
{
    "message": "Invalid fields"
}
```

</details>

### Cadastrando novo usuário

```http
POST /user
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `displayName` | `string` | **Obrigatório**.|
| `senha` | `string` | **Obrigatório**. No minimo 6 dígitos |
| `email` | `string` | **Obrigatório**. Email valido e existente no banco de dados |
| `image` | `string` | **Opcional**. URL da imagem |

<details><summary>Exemplo de Entrada:</summary></br>

```json
{
	"displayName": "Brett Wiltshire",
	"email": "brett@email.com",
	"password": "123456",
	"image": "http://4.bp.blogspot.com/_YA50adQ-7vQ/S1gfR_6ufpI/AAAAAAAAAAk/1ErJGgRWZDg/S45/brett.png"
}
```

</details>

<details><summary>Exemplo de retorno:</summary></br>

Em caso de sucesso (status 201):
```json
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjoxLCJkaXNwbGF5TmFtZSI6Ikxld2lzIEhhbWlsdG9uIiwiZW1haWwiOiJsZXdpc2hhbWlsdG9uQGdtYWlsLmNvbSIsImltYWdlIjoiaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy8xLzE4L0xld2lzX0hhbWlsdG9uXzIwMTZfTWFsYXlzaWFfMi5qcGcifSwiaWF0IjoxNjgxOTExOTY1LCJleHAiOjE2ODI1MTY3NjV9.zpc2tktRB7ScbZP8JDkMrcJ4yPPIbtdaTxC2__o__8E"
}
```

Em caso de erro (status 400):
```json
{
    "message": "\"displayName\" length must be at least 8 characters long"
}
```
ou
```json
{
    "message": "\"email\" must be a valid email"
}
```
ou
```json
{
    "message": "\"password\" length must be at least 6 characters long"
}
```
Em caso de erro (status 409):
```json
{
    "message": "User already registered"
}
```

</details>

### Buscando todos os usuários

```http
GET /user
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `Authorization` | `string` | **Obrigatório**. Informar no authorization do headers da requisisção o token gerado|


<details><summary>Exemplo de retorno:</summary></br>

Em caso de sucesso (status 200):
```json
[
	{
		"id": 1,
		"displayName": "Lewis Hamilton",
		"email": "lewishamilton@gmail.com",
		"image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
	},
	{
		"id": 2,
		"displayName": "Michael Schumacher",
		"email": "MichaelSchumacher@gmail.com",
		"image": "https://sportbuzz.uol.com.br/media/_versions/gettyimages-52491565_widelg.jpg"
	},
	{
		"id": 3,
		"displayName": "Brett Wiltshire",
		"email": "brett@email.com",
		"image": "http://4.bp.blogspot.com/_YA50adQ-7vQ/S1gfR_6ufpI/AAAAAAAAAAk/1ErJGgRWZDg/S45/brett.png"
	}
]
```

</details>

### Buscando usuário por ID

```http
GET /user/:id
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `Authorization` | `string` | **Obrigatório**. Informar no authorization do headers da requisisção o token gerado|


<details><summary>Exemplo de retorno:</summary></br>

Em caso de sucesso (status 200):
```json
{
    "id": 1,
    "displayName": "Lewis Hamilton",
    "email": "lewishamilton@gmail.com",
    "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
}
```

Em caso de erro (status 404):
```json
{
    "message": "User does not exist"
}
```

</details>

### Inserindo nova categoria

```http
POST /categories
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `Authorization` | `string` | **Obrigatório**. Informar no authorization do headers da requisisção o token gerado|
| `name` | `string` | **Obrigatório**. Informar no body o nome da nova categoria|

<details><summary>Exemplo de Entrada:</summary></br>

```json
{
  "name": "Typescript"
}
```

</details>


<details><summary>Exemplo de retorno:</summary></br>

Em caso de sucesso (status 201):
```json
{
	"id": 3,
	"name": "Typescript"
}
```

Em caso de erro (status 400):
```json
{
    "message": "\"name\" is required"
}
```

</details>

### Buscando todas as categorias

```http
GET /categories
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `Authorization` | `string` | **Obrigatório**. Informar no authorization do headers da requisisção o token gerado|


<details><summary>Exemplo de retorno:</summary></br>

Em caso de sucesso (status 200):
```json
[
	{
		"id": 1,
		"name": "Inovação"
	},
	{
		"id": 2,
		"name": "Escola"
	},
	{
		"id": 3,
		"name": "Typescript"
	}
]
```

</details>

### Adicionando novo post

```http
POST /post
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `Authorization` | `string` | **Obrigatório**. Informar no authorization do headers da requisisção o token gerado|
| `title` | `string` | **Obrigatório**.|
| `content` | `string` | **Obrigatório**.|
| `categoryIds` | `Array<number>` | **Obrigatório**. Informar um array com os ids das categorias.|

<details><summary>Exemplo de Entrada:</summary></br>

```json
{
  "title": "Latest updates, August 1st",
  "content": "The whole text for the blog post goes here in this key",
  "categoryIds": [1, 2]
}
```

</details>


<details><summary>Exemplo de retorno:</summary></br>

Em caso de sucesso (status 201):
```json
{
    "id": 3,
    "title": "Latest updates, August 1st",
    "content": "The whole text for the blog post goes here in this key",
    "userId": 1,
    "updated": "2022-05-18T18:00:01.196Z",
    "published": "2022-05-18T18:00:01.196Z"
}
```

Em caso de erro (status 400):
```json
{
    "message": "Some required fields are missing"
}
```

ou

```json
{
    "message": "one or more \"categoryIds\" not found"
}
```

</details>

### Buscando todos os posts

```http
GET /post
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `Authorization` | `string` | **Obrigatório**. Informar no authorization do headers da requisisção o token gerado|


<details><summary>Exemplo de retorno:</summary></br>

Em caso de sucesso (status 200):
```json
[
	{
		"id": 1,
		"title": "Post do Ano",
		"content": "Melhor post do ano",
		"userId": 1,
		"published": "2011-08-01T19:58:00.000Z",
		"updated": "2011-08-01T19:58:51.000Z",
		"user": {
			"id": 1,
			"displayName": "Lewis Hamilton",
			"email": "lewishamilton@gmail.com",
			"image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
		},
		"categories": [
			{
				"id": 1,
				"name": "Inovação",
				"PostCategory": {
					"postId": 1,
					"categoryId": 1
				}
			}
		]
	},
	...
]
```

</details>

### Buscando post por ID

```http
GET /post/:id
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `Authorization` | `string` | **Obrigatório**. Informar no authorization do headers da requisisção o token gerado|


<details><summary>Exemplo de retorno:</summary></br>

Em caso de sucesso (status 200):
```json
{
	"id": 2,
	"title": "Vamos que vamos",
	"content": "Foguete não tem ré",
	"userId": 1,
	"published": "2011-08-01T19:58:00.000Z",
	"updated": "2011-08-01T19:58:51.000Z",
	"user": {
		"id": 1,
		"displayName": "Lewis Hamilton",
		"email": "lewishamilton@gmail.com",
		"image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
	},
	"categories": [
		{
			"id": 2,
			"name": "Escola",
			"PostCategory": {
				"postId": 2,
				"categoryId": 2
			}
		}
	]
}
```

Em caso de suerrocesso (status 404):
```json
{
	"message": "Post does not exist"
}
```

</details>

### Editando post

```http
PUT /post/:id
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `Authorization` | `string` | **Obrigatório**. Informar no authorization do headers da requisisção o token gerado|
| `title` | `string` | **Obrigatório**.|
| `content` | `string` | **Obrigatório**.|

<details><summary>Exemplo de Entrada:</summary></br>

```json
{
  "title": "Latest updates, August 1st",
  "content": "The whole text for the blog post goes here in this key",
}
```

</details>


<details><summary>Exemplo de retorno:</summary></br>

Em caso de sucesso (status 200):
```json
{
    "id": 3,
    "title": "Latest updates, August 1st",
    "content": "The whole text for the blog post goes here in this key",
    "userId": 1,
    "published": "2022-05-18T18:00:01.000Z",
    "updated": "2022-05-18T18:07:32.000Z",
    "user": {
        "id": 1,
        "displayName": "Lewis Hamilton",
        "email": "lewishamilton@gmail.com",
        "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
    },
    "categories": [
        {
        "id": 1,
        "name": "Inovação"
        },
        {
        "id": 2,
        "name": "Escola"
        }
    ]
}
```

Em caso de erro (status 401):
```json
{
    "message": "Unauthorized user"
}
```

Em caso de erro (status 400):
```json
{
    "message": "Some required fields are missing"
}
```

</details>

### Apagando post

```http
DELETE /post/:id
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `Authorization` | `string` | **Obrigatório**. Informar no authorization do headers da requisisção o token gerado|

<details><summary>Exemplo de retorno:</summary></br>

Em caso de sucesso (status 204):

Em caso de erro (status 401):
```json
{
    "message": "Unauthorized user"
}
```

Em caso de erro (status 404):
```json
{
    "message": "Post does not exist"
}
```

</details>

### Apagando usuário logado

```http
DELETE /user/me
```

Essa rota deleta o usuário que esta logado baseado nos dados do token.

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `Authorization` | `string` | **Obrigatório**. Informar no authorization do headers da requisisção o token gerado|

<details><summary>Exemplo de retorno:</summary></br>

Em caso de sucesso (status 204):

</details>

### Buscando post por algo contido no titulo ou texto

```http
GET /post/search
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `Authorization` | `string` | **Obrigatório**. Informar no authorization do headers da requisisção o token gerado|

<details><summary>Exemplo de pesquisa:</summary></br>

```http
URL: http://localhost:3000/post/search?q=vamo
```

</details>

<details><summary>Exemplo de retorno:</summary></br>

Em caso de sucesso (status 200):
```json
[
  {
    "id": 2,
    "title": "Vamos que vamos",
    "content": "Foguete não tem ré",
    "userId": 1,
    "published": "2011-08-01T19:58:00.000Z",
    "updated": "2011-08-01T19:58:51.000Z",
    "user": {
      "id": 1,
      "displayName": "Lewis Hamilton",
      "email": "lewishamilton@gmail.com",
      "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
    },
    "categories": [
      {
        "id": 2,
        "name": "Escola"
      }
    ]
  }
]
```

Em caso de search informado for vazio, trazer todos os posts (status 200):
```json
{
    "message": "Unauthorized user"
}
```

Em caso de inexistente (status 200):
```json
[]
```

</details>

---


## Instalação/visualização

1. Clonar o repositório

```bash
  git clone https://github.com/Wanderson-rpf/Blog-API.git
```

2. Executar docker-compose
Para este é necessário ter o docker instalado.

```bash
  docker-compose up -d --build
```

3. Acesse o terminal do container da aplicação
```bash
  docker exec -it blogs_api bash 
```

4. No terminal do container rode o comando para instalação das dependências.
```bash
  npm install
```

5. No terminal do container rode o comando de start para ambiente de produção ou debug para ambiente de desenvolvimento.

```bash
  npm run start
```
```bash
  npm run debug
```

---

## :man_technologist: Feito por
[Wanderson Ricardo](https://www.linkedin.com/in/wanderson-ricardo-dev/)
