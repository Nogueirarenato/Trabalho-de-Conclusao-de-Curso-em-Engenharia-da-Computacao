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

            nome: "João Da Silva",
            idade: 47,
            telefone: "(11) 99999-0890",
            responsavel_1: "Marcinho",
            tel_responsavel_1: "(11) 99999-0899",
            responsavel_2: "Marcos",
            tel_responsavel_2: "(11) 99999-0896"

        }
        ))
        .then(
            Medicamentos.create({


                medicamento: "Dipirona",
                dose: "500mg",
                data_inicial: "2023-09-16 23:59:59"
                ,
                data_final: "2023-09-25 23:59:59",
                intervalo: 8,
                status: 1,
                pacienteId: 1




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
                if (element.login == login && element.senha == senha) { trigger = 2; }

            }
        }



    }).then(() => {
        if (trigger == 2) { res.sendStatus(200) }
        else (res.sendStatus(401))
    })


})

app.delete("/api/ApagarAdministrador",(req, res)=>{
    var id = req.body.id;
    var idInt = parseInt(id);

    Login.findByPk(idInt)
        .then((administrador) => {
            if (administrador) {
                return administrador.destroy();
            } else {
                res.status(404).json({ message: "Administrador não encontrado" });
            }
        })
        .then(() => {
            console.log("Administrador excluído com sucesso");
            res.status(200).json({ message: "Medicação excluída com sucesso" });
        })
        .catch((error) => {
            console.error("Erro ao excluir medicação:", error);
            res.status(500).json({ message: "Erro interno do servidor" });
        });
});    





//Medicamentos

app.get("/api/ListarMedicamentos", (req, res) => {
    Medicamentos.findAll().then(medicacoes => {

        res.json(medicacoes)
    }).then(console.log("Listando medicacoes")).catch(() => {
        console.log("Erro 03")
        res.sendStatus(400)
    })

})
app.post("/api/CadastrarMedicacao", (req, res) => {


    var body = req.body;
    var medicamento = req.body.medicamento;
    var dose = req.body.dose;
    var data_inicial = req.body.data_inicial;
    var data_final = req.body.data_final;
    var intervalo = req.body.intervalo;
    var intervaloInt = parseInt(intervalo);
    var status = req.body.status;
    var statusInt = parseInt(status);
    var pacienteId = req.body.pacienteId;
    var pacienteIdInt = parseInt(pacienteId)
    console.log(body);



    Medicamentos.create(
        {
            medicamento: medicamento,
            dose: dose,
            data_inicial: data_inicial,
            data_final: data_final,
            intervalo: intervaloInt,
            status: statusInt,
            pacienteId: pacienteIdInt


        }
    ).then(
        () => {
            console.log("MEDICACAO  CADASTRADO!!")

        }
    ).then(() => {
        res.sendStatus(200);
    }).catch(err => {
        console.log("Deu erro...")
        res.sendStatus(400);
        console.log(err)
    })




})

app.patch("/api/CadastrarMedicacao", (req, res) => {
    var id = req.body.id;
    var idInt = parseInt(id);
    var status = 2;

    Medicamentos.findByPk(idInt)
        .then((medicamento) => {
            if (medicamento) {
                return medicamento.update({ status: status });
            } else {
                res.status(404).json({ message: "Medicamento não encontrado" });
            }
        })
        .then(() => {
            console.log("Medicação atualizada com sucesso");
            res.status(200).json({ message: "Medicação atualizada com sucesso" });
        })
        .catch((error) => {
            console.error("Erro ao atualizar medicação:", error);
            res.status(500).json({ message: "Erro interno do servidor" });
        });
});

app.delete("/api/ApagarMedicacao", (req, res) => {
    var id = req.body.id;
    var idInt = parseInt(id);

    Medicamentos.findByPk(idInt)
        .then((medicamento) => {
            if (medicamento) {
                return medicamento.destroy();
            } else {
                res.status(404).json({ message: "Medicamento não encontrado" });
            }
        })
        .then(() => {
            console.log("Medicação excluída com sucesso");
            res.status(200).json({ message: "Medicação excluída com sucesso" });
        })
        .catch((error) => {
            console.error("Erro ao excluir medicação:", error);
            res.status(500).json({ message: "Erro interno do servidor" });
        });
});


//Pacientes

app.get("/api/ListarPacientes", (req, res) => {
    Pacientes.findAll().then(pacientes => {

        res.json(pacientes)
    }).then(console.log("Listando pacientes")).catch(() => {
        console.log("Erro 03")
        res.sendStatus(400)
    })

})

app.post("/api/CadastrarPaciente", (req, res) => {


    var body = req.body;
    var nome = req.body.nome;
    var idade = req.body.idade;
    var idadeInt = parseInt(idade);
    var telefone = req.body.telefone;
    var responsavel_1 = req.body.responsavel_1;
    var tel_responsavel_1 = req.body.tel_responsavel_1;
    var tel_responsavel_2 = req.body.tel_responsavel_1;
    var responsavel_2 = req.body.responsavel_2;
    console.log(body);



    Pacientes.create(
        {
            nome: nome,
            idade: idadeInt,
            telefone: telefone,
            responsavel_1: responsavel_1,
            tel_responsavel_1: tel_responsavel_1,
            responsavel_2: responsavel_2,
            tel_responsavel_2: tel_responsavel_2


        }
    ).then(
        () => {
            console.log("PACIENTE CADASTRADO!!")

        }
    ).then(() => {
        res.sendStatus(200);
    }).catch(err => {
        console.log("Deu erro...")
        res.sendStatus(400);
        console.log(err)
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


