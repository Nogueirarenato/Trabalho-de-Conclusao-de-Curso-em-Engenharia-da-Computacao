const express = require ('express');
const router = require ("./router");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser);
app.use(router);



app.listen(3333, ()=>console.log('servidor rodando!!'));