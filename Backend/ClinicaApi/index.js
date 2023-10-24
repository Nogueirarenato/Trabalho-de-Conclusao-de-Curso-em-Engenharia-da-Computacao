const express = require("express"); // importando o módulo express para criação de rotas
const app = express();
const connection = require("./database/database");
const Login = require("./login/Login");
const cors = require('cors');
const bodyParser = require("body-parser");
const Medicamentos = require("./medicamentos/Medicamentos");
const Pacientes = require("./pacientes/Pacientes");

const port = process.env.PORT_APP || 21049;
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

//Configurando Banco de dados Inicial
app.get("/api/ConfiguracaoInicial", (req, res) => {
    Login.create({
        login: "admin",
            senha: "admin"
    }).then(
        Pacientes.create({

            nome:"João Da Silva",
            idade:47,
            telefone :"(11) 99999-0890",
            responsavel_1 :"Marcinho",
            tel_responsavel_1:"(11) 99999-0899",
            responsavel_2 :"Marcos",
            tel_responsavel_2:"(11) 99999-0896"

        }
    ))
    .then(
        Medicamentos.create({


            medicamento:"Dipirona",
            dose:"500mg",
            data_inicial :"2023-09-16 23:59:59"
                ,
            data_final :"2023-09-25 23:59:59",
            intervalo: 8,
            status:1,
            pacienteId:1




        })
    )
    .then(console.log("Dados Cadastrados com Sucesso!!")).then(res.sendStatus(200)).catch(err => {
        console.log("Deu erro...")
        res.sendStatus(400);
        console.log(err)
    })

})


//Administradores

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
           if(element.login == login && element.senha == senha){ trigger =2;}
         
            }
        }

        

    }).then(()=>{
        if(trigger == 2){res.sendStatus(200)}
        else(res.sendStatus(401))
    })


})



//Medicamentos

app.get("/api/ListarMedicamentos", (req, res) => {
    Medicamentos.findAll().then(medicacoes => {

        res.json(medicacoes)
    }).then(console.log("Listando medicacoes")).catch(() => {
        console.log("Erro 03")
        res.sendStatus(400)
    })

})



//Pacientes

app.get("/api/ListarPacientes", (req, res) => {
    Pacientes.findAll().then(pacientes => {

        res.json(pacientes)
    }).then(console.log("Listando pacientes")).catch(() => {
        console.log("Erro 03")
        res.sendStatus(400)
    })

})




app.listen(port, () => {
    console.log(`
Rodando...
Este projeto foi desenvolvido em Node.js em Setembro de 2023
Autor: Renato Nogueira
`

    );
})


