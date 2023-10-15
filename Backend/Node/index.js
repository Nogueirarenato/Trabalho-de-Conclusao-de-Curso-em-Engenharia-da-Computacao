const express = require("express"); // importando o módulo express para criação de rotas
const app = express();
const cors = require('cors');
const bodyParser = require("body-parser");

const port = process.env.PORT_APP || 21044;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());



const corsOptions = {
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
}

app.use(cors(corsOptions))








app.listen(port, () => {
    console.log(`
Rodando...
Este projeto foi desenvolvido em Node.js em setembro de 2023
Autor: Renato Nogueira
`

    );
})