# API de Cadastro de Pessoas

Esta é uma API para realizar operações de cadastro de pessoas utilizda durante a mentoria de inclusão.

## Recursos

A API possui os seguintes recursos:

- `POST /api/pessoas`: Cria uma nova pessoa.
- `GET /api/pessoas`: Lista todas as pessoas cadastradas.
- `GET /api/pessoas/{id}`: Retorna os dados de uma pessoa específica pelo ID.
- `DELETE /api/pessoas/{id}`: Exclui uma pessoa pelo ID.
- `PUT /api/pessoas/{id}`: Atualiza os dados de uma pessoa pelo ID.

## Como Subir

Para subir a API localmente, siga as etapas abaixo:

1. Certifique-se de ter o Node.js instalado em sua máquina.

2. Faça o clone do repositório ou baixe o código-fonte.

3. Abra o terminal na pasta raiz do projeto.

4. Execute o seguinte comando para instalar as dependências necessárias:

   ```
   npm install
   ```

5. Após a instalação das dependências, execute o seguinte comando para iniciar a API:

   ```
   npm start
   ```

6. A API estará disponível em `http://localhost:3000`. Você poderá acessar os endpoints conforme descrito na seção de recursos.

## Como Subir via Docker

Para subir a API utilizando o Docker, siga as etapas abaixo:

1. Certifique-se de ter o Docker instalado em sua máquina.

2. Faça o clone do repositório ou baixe o código-fonte.

3. Abra o terminal na pasta raiz do projeto.

4. Execute o seguinte comando para criar a imagem do Docker:

   ```
   docker build -t nome-da-imagem .
   ```

   Substitua `nome-da-imagem` pelo nome desejado para a imagem Docker.

5. Após a criação da imagem, execute o seguinte comando para iniciar o contêiner Docker:

   ```
   docker run -p 3000:3000 nome-da-imagem
   ```

   Substitua `nome-da-imagem` pelo nome da imagem Docker que você definiu anteriormente.

6. A API estará disponível em `http://localhost:3000`. Você poderá acessar os endpoints conforme descrito na seção de recursos.

## Dependências

A API utiliza as seguintes dependências:

- Express: framework para criação de APIs web.
- Sequelize: ORM (Object-Relational Mapping) para interagir com o banco de dados.
- Postgres: driver para conexão com o banco de dados Postgres.
- Outras dependências específicas podem ser encontradas no arquivo `package.json`.

Certifique-se de ter todas as dependências instaladas antes de executar a API.

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para enviar pull requests com melhorias, correções de bugs ou novos recursos.

## Licença

Este projeto está licenciado sob a [MIT License](https://opensource.org/licenses/MIT).
