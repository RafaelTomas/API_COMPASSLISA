<h1 align="center">
      <a href="#" alt="Delicatesse hi-tech da Dona Maria"> Compassolisa - Alugue seu carro de luxo!</a>
</h1>

<p align="center">
 <a href="#-sobre-o-projeto">Sobre</a> •
 <a href="">Documentação</a> •
 <a href="#-como-usar-a-API">Como usar a API</a> •
 <a href="#-teste-das-rotas">Funcionalidades</a> •  
 <a href="#-tecnologias">Tecnologias</a> • 
 <a href="#-agradecimentos">Agradecimentos</a> • 
 <a href="#-autores">Autores</a> • 
 <a href="#-licença">Licença</a>
</p>

<h4 align="center">
	🚧   Em Construção 🚀 🚧
</h4>

## Sobre o Projeto 

<h3 align="center">
   Alugue seu carro com a compassLisa, os melhores carros de luxo no melhor lugar, e com a api tornando tudo mais facil
</h3>




## Como usar a API ❓

### Pré-requisitos ❗️

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[MongoDB](https://www.mongodb.com), [Node.js](https://nodejs.org/en/) e pode ser utilizado o [Postman](https://www.postman.com) para testar as rotas,
não esquecer de criar a pasta ".env' seguindo o exemp.
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### 🎲 Rodando o Back End (servidor)

```bash
# Clone este repositório
$ git clone <>

# Acesse a pasta do projeto no terminal/cmd
$ cd APICompassLisa

# Instale as dependências
$ npm install

# Execute a aplicação 
$ npm start

# O servidor inciará na porta:3000 - acesse <http://localhost:3000/api/v1> 
```
### 📝 Teste de rotas

> Sugestões para testar as rotas

### REQUEST - (POST)
> Para cadastrar funcionarios.

> POST - `http://localhost:3000/api/v1/employee`
```json
{
     "name": "Maria da Silva",
     "cpf": "12312312312",
     "office": "gerente",
     "birthday": "21/04/2021"

}
```


### REQUEST - (GET)

> Para listar funcionarios.

> GET - `http://localhost:3000/api/v1/emplyee`

```json
   //Exemplo de query params
{

    "name": "silva",
    "office": "gerente"

}

```


### REQUEST - (PUT)

> Para atualizar um funcionario.

> PUT - `http://localhost:3000/api/v1/employee/:employee_id`

```json
{
 
"name": "maria da roberta",
"office": "funcionario",
"situation": "deactivate"


}
```
> Situation só pode ser deactivate ou activate



### REQUEST - (DELETE)

> Para deletar um funcionario .

> DELETE - ` http://localhost:3000/api/v1/employee/:employee_id`



### REQUEST - (POST) 
> Para cadastrar um produto.

> Use: POST - ` http://localhost:3000/api/v1/product`

```json
{
"name": "notebook dell",
"category": "eletronico",
"price": "12.32",
"employee_id": "a99e8bf7-fa32-4ae7-8b53-5e00b9d43621"
}
```


>Apenas Gerente ativo pode cadastrar um novo Produto

### REQUEST - (GET) 
> Para listar os produtos.

> Use: GET - ` http://localhost:3000/api/v1/product`

```json
{
"employee_id": "a99e8bf7-fa32-4ae7-8b53-5e00b9d43621",
"category": "eletronico",
"name": "dell",
"min_price": 10.5,
"max_price":50
}
```

### 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [mongoose](https://mongoosejs.com)
- [Node.js](https://nodejs.org/en/)
- [Postman](https://pt-br.reactjs.org/)
- [Swagger](https://swagger.io)
- [MongoDb](https://www.mongodb.com)

# 🦸Agradecimentos
 Obrigado por incentivar, por cada conselho ,"puxão de orelha" e por estar sempre por perto dando apoio e tirando todas nossas dúvidas!!

<table>
    <tr>
        <td><a href="" >Felipe Silva</td>
        <td><a href="" >Bruna Santos</td>
        <td><a href="" >Thais Nicodemus</td>
    </tr>
    <tr>
        <td><a href="" >Diego Bueno</td>
        <td><a href="" >Gabriel Missio</td>
        <td><a href="" >Giovanni Hoffmann</td>
    </tr>
</table>

# 👨‍💻Autor




# 📝Licença

Esse repositório está licenciado pela **MIT LICENSE**. Para mais informações detalhadas, leia o arquivo [LICENSE](./LICENSE) contido nesse repositório.