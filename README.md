<h1 align="center">
      <a href="#" alt="Compassolisa - Alugue seu veiculo de luxo!">  🏍 Compassolisa - Alugue seu veiculo de luxo! 🚘</a>
</h1>

<p align="center">
 <a href="#-sobre-o-projeto">Sobre</a> •
 <a href="./CompassLisa_Documentation.yml">Documentação</a> •
 <a href="#-como-usar-a-API">Como usar a API</a> •
 <a href="#-rotas-disponiveis">Rotas</a> •  
 <a href="#-testes">Como fazer os testes</a> •  
 <a href="#-tecnologias">Tecnologias</a> • 
 <a href="#-agradecimentos">Agradecimentos</a> • 
 <a href="#-autor">Autor</a> • 
 <a href="#-licença">Licença</a>
</p>

<h4 align="center">
	✅  Finalizado 🤟🏿 
</h4>

##  🔍 Sobre o Projeto!! 

<h3 align="center">
   Alugue seu carro com a compassLisa, os melhores carros de luxo no melhor lugar, e com a api tornando tudo mais facil
</h3>


## Como usar a API ❓

### Pré-requisitos ❗️

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[MongoDB](https://www.mongodb.com), [Node.js](https://nodejs.org/en/),
não esquecer de criar a pasta ".env' seguindo a [.env.example](./env.example).
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

# Execute a aplicação em modo de produção 
$ npm run dev

# O servidor inciará na porta:3000 - acesse <http://localhost:3000/api/v1> 
```

## 🗺 Rotas disponiveis 

### 🏎 Car 
> Rota: `http://localhost:<PORT>/api/v1/car`

 Request                    | Funcionalidade                 |
 ---------------------------|--------------------------|
 `POST`                    | cadastrar um carro       |
 `GET`                     | listar todos carros      |
 `DELETE`                  | remover um carro         |
 `PUT`                     | atualiza carro cadastrado|
 `GET/:id`                 | buscar um carro          |
 `PATCH/:id/acessorios/:id`| buscar um carro          |

#

### 🤵🏾 People 
> Rota: `http://localhost:<PORT>/api/v1/people`
 
| Request    | Funcionalidade                 |
 -----------| -------------------------|
 `POST`     | cadastrar uma pessoa     |
 `GET`      | listar todas as pessoas  |
 `DELETE`   | remover uma pessoa       |
 `PUT`      | atualiza uma pessoa      |
 `GET/:id`  | buscar uma pessoa        |

#

### 🔒  Authenticate
> Rota: `http://localhost:<PORT>/api/v1/authenticate`

 Request   | Funcionalidade                          |
 --------- | ----------------------------------|
 | `POST`    | Atutenticar Cadastro de people    

#

 ### 💸 Rental
> Rota: `http://localhost:<PORT>/api/v1/rental`
 
 Request   | Funcionalidade   |
 ----------| ------------------------------|
  `POST`   | cadastrar uma locadora        |
  `GET`    | listar todas locadoras        |
  `DELETE` | remover uma locadora          |
  `PUT`    | atualizar locadora cadastrada |
  `GET/:id`| buscar uma locadora           |


 ### 📚 Acessar a documentação 
 > Rota: `http://localhost:3000/api/v1/api-docs`
 ```bash
  #  Abrir terminal e usar o script para iniciar a api
    $ npm run start

  # Na rota estará disponivel a documentação!!  
  ```

---

## 👨🏿‍🔬 Testes 

 
```bash

#  abrir terminal e usar o script de tests
$ npm run test

# Será rodado os testes de feature e ira mostrar as porcentagem!
```

### 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [mongoose](https://mongoosejs.com)
- [Node.js](https://nodejs.org/en/)
- [Swagger](https://swagger.io)
- [MongoDb](https://www.mongodb.com)
- [Jest](https://www.Jest.com)

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

- [Rafael Tomás](https://www.linkedin.com/in/rafael-tomas-30b9671a9/)<br>
 Desafio "FINAL" e ralado mas sempre carregado de muito aprendizado cada "desafio" grato desde já por tudo

# 📝Licença

Esse repositório está licenciado pela **MIT LICENSE**. Para mais informações detalhadas, leia o arquivo [LICENSE](./LICENSE) contido nesse repositório.