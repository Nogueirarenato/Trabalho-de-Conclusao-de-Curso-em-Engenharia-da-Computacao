import React, { useEffect, useState, Component } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate, Link } from 'react-router-dom';
import Logo from '../img/logoUnivesp.png';
import Logo2 from '../img/engenhariaComputacao.png';
import Url from '../Services/httpAPI'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Index.css';
import './ListarAdministradores.css'
import { Button } from "react-bootstrap";
import Table from 'react-bootstrap/Table';


const PaginaDeAdministradores = () => {

    let vetor = []
    let indice = -1
    let vetorName = []
    let convertString = ""
    let value
    let display = "flex"
    let [resposta, setResposta] = useState([]);


    useEffect(() => {
        // GET request using fetch inside useEffect React hook
        fetch(Url + "ListarAdministradores")
            .then(response => response.json())
            .then(data => { setResposta(data) });

        // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);

    function Apagar(event) {

        event.preventDefault();
        let confircacao = confirm("Tem certeza que deseja apagar o Administrador?")


        if (confircacao == true) {


            let administrador = {

                id: event.target.value

            }



            setTimeout(() => {
                fetch(Url + "ApagarAdministrador", {
                    method: 'DELETE',
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(administrador),
                }).then(window.location.reload(true))
            }, 1000)
        }

    }




    return (

        <div className="caixaAdministradores">
            <h1 className="tituloLogado alinharConsoleLogado">Lista de Administradores</h1>


            <div className="tabela-hosts alinharConsoleLogado2">
                <Table striped bordered hover className="opaco">
                    <thead className="primeiralinhaHostGroup">
                        <tr scope="col" className="alinharConsoleLogado3">
                            <th scope="col" className="leftHostGroup ">ID</th>
                            <th scope="col" className="leftHostGroup">Login</th>
                            <th scope="col" className="leftHostGroup">Senha</th>
                            <th scope="col" className="leftHostGroup">Ações</th>
                            {/* <th className="leftHostGroup">Apagar</th> */}

                        </tr>
                    </thead>
                    <tbody id="myTable alinharConsoleLogado3">
                        {
                            resposta.map(element => {
                                vetor.push(element.login)
                                convertString = element.login
                                convertString = convertString.toString()
                                vetorName.push(convertString)
                                indice++
                                if(element.login == "admin" && element.senha == "admin"){display ="none"}
                                else{display="flex"}
                                 return (
                                    <tr className="linhaHostGroup alinharConsoleLogado3" key={element.id}>
                                        <td scope="row" className="centerNum" >{element.id}</td>
                                        <td className="leftHostGroup">{element.login}</td>
                                        <td className="leftHostGroup">{element.senha}</td>
                                        <td> <Button className="btn-block btn-blocktime" style={{ marginLeft: "5%", display: display }} value={element.id} onClick={Apagar.bind(value)}  >
                                            Apagar
                                        </Button></td>



                                        {/* <td className="centerNum"><a onClick={this.janelaModal.bind(this, vetor[indice], vetorName[indice])} >Listar Eventos</a></td> */}
                                    </tr>)
                            })
                        }




                    </tbody>
                </Table>
            </div>
            <div className="alinharConsoleLogado margin-botton">

                <Button className="btn-block btn-blocktime margin-botton" type='button' value="Entrar"  >
                    <Link to="/ConsoleLogado" className="divButton"> Voltar </Link>
                </Button>
            </div>
        </div>

    );
}

export default PaginaDeAdministradores;