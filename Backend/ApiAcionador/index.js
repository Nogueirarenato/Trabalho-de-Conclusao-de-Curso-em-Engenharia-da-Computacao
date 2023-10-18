const express = require("express"); // importando o módulo express para criação de rotas
const app = express();
const connection = require("./database/database");
const Login = require("./login/Login");
const cors = require('cors');
const bodyParser = require("body-parser");

const port = process.env.PORT_APP || 3333;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());




const corsOptions = {
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
}

app.use(cors(corsOptions))

//Autenticação do Banco de Dados
connection.authenticate().then(() => {
    console.log("Conexão efetuada com sucesso...")
}).catch((error) => {
    console.log("Ohhh não... alguma coisa deu errado!!! " + error)
});





app.post("/api/CadastrarAdministrador", (req, res) => {


    var body = req.body;
    var login = req.body.login;
    var senha = req.body.senha;
    console.log(body);
    


    Login.create(
        {
            login: login,
            senha: senha

        }
    ).then(
        () => {
            console.log("ADMINISTRADOR CADASTRADO!!")
            
        }
    ).then(() => {
        res.sendStatus(200);
    }).catch(err => {
        console.log("Deu erro...")
        res.sendStatus(400);
        console.log(err)
    })




})


app.get("/api/ListarAdministradores", (req, res) => {
    Login.findAll().then(login => {

        res.json(login)
    }).then(console.log("Listando acionamentos")).catch(() => {
        console.log("Erro 03")
        res.sendStatus(400)
    })

})

app.post("/api/VerificarLogin", (req, res) => {


    var body = req.body;
    var login = req.body.login;
    var senha = req.body.senha;
    var trigger = 1;
    console.log(body);
    

    Login.findAll().then(loginBanco => {
        console.log(loginBanco);
        console.log(`Login Enviado ${login}    Senha Enviada: ${senha}`)
        let logins = Object.keys(loginBanco);
        console.log(logins)
        

        for (const dataValues in loginBanco) {
            if (Object.hasOwnProperty.call(loginBanco, dataValues)) {
           const element = loginBanco[dataValues];
           console.log(`element.login = ${element.login}    element.senha= ${element.senha}`)
           if(element.login == login && element.senha == senha){ res.sendStatus(200); trigger =2}
         
            }
        }

        

    }).then(()=>{if(trigger==1)res.sendStatus(401);})


})




app.listen(port, () => {
    console.log(`
Rodando...
Este projeto foi desenvolvido em Node.js em abril de 2023
Autor: Renato Nogueira
`

    );
})


