import React, { useEffect, useState, Component } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate, Link } from 'react-router-dom';
import Logo from '../img/logoUnivesp.png';
import Logo2 from '../img/engenhariaComputacao.png';
import Url from '../Services/httpAPI'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Index.css';
import {
    Button
} from "react-bootstrap";



const CadastrarMedicacao = () => {
    const navigate = useNavigate();

    let [nome, setNome] = useState("")
    let [idade, setIdade] = useState("")
    let [telefone, setTelefone] = useState("")
    let [responsavel1, setResponsavel1] = useState("")
    let [telResponsavel1, setTelResponsavel1] = useState("")
    let [responsavel2, setResponsavel2] = useState("")
    let [telResponsavel2, setTelResponsavel2] = useState("")
    let [mensagemDeErro, setMensagemDeErro] = useState("")

    function AtualizaNome(event) {
        event.preventDefault();
        setNome(event.target.value)
        console.log(nome)
    }

    function AtualizaIdade(event) {
        event.preventDefault();
        setIdade(event.target.value)
        console.log(idade)
    }

    function AtualizaTelefone(event) {
        event.preventDefault();
        setTelefone(event.target.value)
        console.log(telefone)
    }
    function AtualizaResponsavel1(event) {
        event.preventDefault();
        setResponsavel1(event.target.value)
        console.log(responsavel1)
    }

    function AtualizaResponsavel2(event) {
        event.preventDefault();
        setResponsavel2(event.target.value)
        console.log(telResponsavel2)
    }

    function AtualizaTelResponsavel1(event) {
        event.preventDefault();
        setTelResponsavel1(event.target.value)
        console.log(telResponsavel1)
    }

    function AtualizaTelResponsavel2(event) {
        event.preventDefault();
        setTelResponsavel2(event.target.value)
        console.log(telResponsavel2)
    }


    function enviaRequisicao(event) {
        event.preventDefault();
        if (nome == "" || idade == "" || telefone == "" || responsavel1 == "" || telResponsavel1 == "" || responsavel2 == "" || telResponsavel2 == "") { setMensagemDeErro("Todos os campos devem ser preenchidos!!") }
        else {

            let user = {


    nome: nome,
    idade: idade,
    telefone: telefone,
    responsavel_1: responsavel1,
    tel_responsavel_1: telResponsavel1,
    tel_responsavel_2:  telResponsavel2,
    responsavel_2: responsavel2


            }



            fetch(Url + "CadastrarPaciente", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            }).then(response => {

                if (response.status == 200) { setMensagemDeErro(""); alert("Paciente Cadastrado com Sucesso!!"); navigate("/ConsoleLogado") }


            })


        }


    }




    return (
        <div>

            <div className="caixa">
                <h1>Cadastrar Medicação</h1>
                <form onSubmit={enviaRequisicao.bind()}>
                    <input type="text" onChange={AtualizaNome.bind()} value={nome} className="input-text" placeholder="Insira o nome do paciente" required ></input>
                    <input type="datetime-local" onChange={AtualizaIdade.bind()} value={idade} className="input-text" placeholder="Idade do paciente" required ></input>
                    <input type="text" onChange={AtualizaTelefone.bind()} value={telefone} className="input-text" placeholder="Telefone do Paciente (XX) XXXXX-XXXX" required ></input>
                    <input type="text" onChange={AtualizaResponsavel1.bind()} value={responsavel1} className="input-text" placeholder="Insira o nome do primeiro responsável" required ></input>
                    <input type="text" onChange={AtualizaTelResponsavel1.bind()} value={telResponsavel1} className="input-text" placeholder="Telefone do primeiro responsavel" required ></input>
                    <input type="text" onChange={AtualizaResponsavel2.bind()} value={responsavel2} className="input-text" placeholder="Insira o nome do segundo responsável" required ></input>
                    <input type="text" onChange={AtualizaTelResponsavel2.bind()} value={telResponsavel2} className="input-text" placeholder="Telefone do segundo responsavel" required ></input>
                    <h2>{mensagemDeErro}</h2>
                    <Button className="btn-block btn-blocktime" type='submit' value="Cadastrar"  >
                        Cadastrar
                    </Button>

                    <Button className="btn-block btn-blocktime" type='button' value="Entrar"  >
                        <Link to="/ConsoleLogado" className="divButton"> Voltar </Link>
                    </Button>
                </form>
            </div>


        </div>
    )


}

export default CadastrarMedicacao;