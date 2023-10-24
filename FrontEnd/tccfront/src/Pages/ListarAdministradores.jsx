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


const PaginaDeAdministradores = () => {

    let vetor = []
    let indice = -1
    let vetorName = []
    let convertString = ""

    let [resposta, setResposta] = useState([]);

    function ListarAdministradores() {
        fetch(Url + "ListarAdministradores").then(response => {


            response.json();

        }).then(data => {
            console.log
        })
    }

    useEffect(() => {
        // GET request using fetch inside useEffect React hook
        fetch(Url + "ListarAdministradores")
            .then(response => response.json())
            .then(data => { console.log(data); setResposta(data) });

        // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);



    return (

        <div className="caixa">
            <h1>Lista de Administradores</h1>


            <div className="tabela-hosts">
                <table className="tableHostGroup">
                    <thead className="primeiralinhaHostGroup">
                        <tr>
                            <th className="leftHostGroup">ID</th>
                            <th className="leftHostGroup">Login</th>
                            <th className="leftHostGroup">Senha</th>
                            {/* <th className="leftHostGroup">Apagar</th> */}

                        </tr>
                    </thead>
                    <tbody id="myTable">
                        {
                            resposta.map(element => {
                                vetor.push(element.login)
                                convertString = element.login
                                convertString = convertString.toString()
                                vetorName.push(convertString)
                                indice++
                                return (
                                    <tr className="linhaHostGroup">
                                        <td className="centerNum" >{element.id}</td>
                                        <td className="leftHostGroup">{element.login}</td>
                                        <td className="leftHostGroup">{element.senha}</td>
                                        <td><Button className="btn-block btn-blocktime" type='submit' value="Entrar"  >
                                            Apagar
                                        </Button></td>
                                        <td><Button className="btn-block btn-blocktime" type='submit' value="Entrar"  >
                                            Editar
                                        </Button></td>


                                        {/* <td className="centerNum"><a onClick={this.janelaModal.bind(this, vetor[indice], vetorName[indice])} >Listar Eventos</a></td> */}
                                    </tr>)
                            })
                        }




                    </tbody>
                </table>
            </div>

            <Button className="btn-block btn-blocktime" type='button' value="Entrar"  >
                <Link to="/ConsoleLogado" className="divButton"> Voltar </Link>
            </Button>

        </div>

    );
}

export default PaginaDeAdministradores;