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
import './ListarAdministradores.css'



const CadastrarAdministrador = () => {
    const navigate = useNavigate();

    let [login, setLogin] = useState("");
    let [senha, setSenha] = useState("")
    let [senha2, setSenha2] = useState("")
    let [mensagemDeErro, setMensagemDeErro] = useState("")

    function AtualizaLogin(event) {
        event.preventDefault();
        setLogin(event.target.value)
        console.log(login)
    }
    function AtualizaSenha(event) {
        event.preventDefault();
        setSenha(event.target.value)
        console.log(senha)
    }
    function AtualizaSenha2(event) {
        event.preventDefault();
        setSenha2(event.target.value)
        console.log(senha2)
    }


    function enviaRequisicao(event) {
        event.preventDefault();
        if (senha == "" || senha2 == "" || login == "") { setMensagemDeErro("Todos os campos devem ser preenchidos!!") }
        else {
            if (senha != senha2) { setMensagemDeErro("As senhas digitadas não são iguais!!") }
            else {
                let user = {


                    login: login,
                    senha: senha


                }



                fetch(Url + "CadastrarAdministrador", {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(user),
                }).then(response => {

                    if (response.status == 200) { setMensagemDeErro(""); alert("Administrador Cadastrado com Sucesso!!"); navigate("/ConsoleLogado") }


                })
            }

        }


    }




    return (
        <div>

            <div className="caixa">
                <h1 className="tituloLogado alinharConsoleLogado">Cadastrar Administrador</h1>
                <form onSubmit={enviaRequisicao.bind()}>
                    <input type="text" onChange={AtualizaLogin.bind()} value={login} className="input-text" placeholder="Insira seu novo usuário" required></input>
                    <input type="password" onChange={AtualizaSenha.bind()} value={senha} placeholder="Insira sua senha" className="input-text" required></input>
                    <input type="password" onChange={AtualizaSenha2.bind()} value={senha2} placeholder="Confirme sua senha" className="input-text" required></input>
                    <h2>{mensagemDeErro}</h2>

                    <div className="alinharConsoleLogado2">
                        <Button className="btn-block btn-blocktime" type='submit' value="Cadastrar"  >
                            Cadastrar
                        </Button>
                    </div>
                    <div className="alinharConsoleLogado margin-botton">

                        <Button className="btn-block btn-blocktime" type='button' value="Entrar"  >
                            <Link to="/ConsoleLogado" className="divButton"> Voltar </Link>
                        </Button>
                    </div>
                </form>
            </div>


        </div>
    )


}

export default CadastrarAdministrador;