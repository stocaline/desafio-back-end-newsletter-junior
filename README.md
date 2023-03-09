<h1 align="center">🚀Desafio: Desenvolvedor Back-end Júnior</h1>

<p align="center">

👨‍💻Projeto desenvolvido como resolução do desafio de desenvolvedor back-end Júnior. O projeto ultiliza o yarn como gerenciador de dependencia, typescript, Node.js, Express.js para a criação das rotas, postgres com o Prisma ORM para criação do banco de dados

## :gear: Instalação

Para rodar o projeto pela primeira vez é nescessario seguir os passos abaixo:

1. Criar um arquivo com o nome ".env" seguindo o ".env.exemple dentro do codigo e configurar de acordo com a seus dados
```.env
DATABASE_URL="postgresql://<USER>:<PASSWORD>@<HOST>:<PORT>/<SCHEMA>?schema=public"
```
2. Rodar o comando abaixo para instalar as dependencias

```Console
yarn install
```

3. Por fim, para fazer a criação da tabela, basta enserir o codigo abaixo
```Console
yarn prisma migrate dev
```

## :computer:Uso

Para rodar o projeto basta digitar o codigo abaixo no terminal:

```Console
yarn dev
```

## :chart_with_upwards_trend: Rotas

O projeto possui 2 rotas

### Rota para cadastrar formulário

URL: POST http://localhost:3333/form

Modelo de Json aceito pela aplicação

```Json
{
    "name": "teste2",
    "email": "teste@asda.com",
    "cpf": "teste2",
    "phone": "teste2"
}
```

Exemplo de retorno
```Json
{
    "message": "Inscrição  concluida"
}
```
<br><br>

### Rota para mostrar formulário cadastrada entre um periodo de tempo

URL: GET http://localhost:3333/form

Modelo de Json aceito pela aplicação

```Json
{
    "initialDate": "2023-03-04T06:56:54.240Z",
    "finalDate": "2023-03-07T13:56:54.240Z"
}
```

Exemplo de retorno
```Json
[
    {
        "id": "0f4c2e33-918a-4c3e-ab46-d393f88fffff",
        "name": "teste",
        "email": "teste",
        "cpf": "teste",
        "phone": "teste",
        "created_at": "2023-03-05T19:17:50.855Z"
    }
]
```
