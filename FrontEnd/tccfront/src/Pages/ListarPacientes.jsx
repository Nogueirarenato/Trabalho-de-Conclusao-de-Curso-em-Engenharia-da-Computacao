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
import Table from 'react-bootstrap/Table';
import './ListarAdministradores.css'


const PaginaDePacientes = () => {

    let vetor = []
    let indice = -1
    let vetorName = []
    let convertString = ""
    let value;

    let [resposta, setResposta] = useState([]);

    const navigate = useNavigate();
    useEffect(() => {
        // GET request using fetch inside useEffect React hook
        fetch(Url + "ListarPacientes")
            .then(response => response.json())
            .then(data => { console.log(data); setResposta(data) });

        // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);

    function IrPaciente(event) {
        event.preventDefault();
        localStorage.setItem("UsuarioID", event.target.value);
        navigate("/listaDeMedicamentosUm")

    }

    function Apagar(event) {
        event.preventDefault();
        let confircacao = confirm("Tem certeza que deseja apagar o Paciente?")


        if (confircacao == true) {


            let paciente = {

                id: event.target.value

            }



            setTimeout(() => {
                fetch(Url + "ApagarPaciente", {
                    method: 'DELETE',
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(paciente),
                }).then(window.location.reload(true))
            }, 1000)
        }




    }

    return (

        <div className="caixaPaciente">
            <h1 className="tituloLogado alinharConsoleLogado">Lista de Pacientes</h1>


            <div className="tabela-hosts">
                <Table striped bordered hover className="opaco">
                    <thead className="primeiralinhaHostGroup">
                        <tr>


                            <th className="leftHostGroup">Id</th>
                            <th className="leftHostGroup">Nome</th>
                            <th className="leftHostGroup">Idade</th>
                            <th className="leftHostGroup">Medicações</th>
                            <th className="leftHostGroup">Telefone</th>
                            <th className="leftHostGroup">Responsável 1</th>
                            <th className="leftHostGroup">Tel. Res. 1</th>
                            <th className="leftHostGroup">Responsável 2</th>
                            <th className="leftHostGroup">Tel. Res. 2</th>
                            <th className="leftHostGroup">Ações</th>
                            {/* <th className="leftHostGroup">Apagar</th> */}

                        </tr>
                    </thead>
                    <tbody id="myTable">
                        {
                            resposta.map(element => {
                                vetor.push(element.nome)
                                convertString = element.nome
                                convertString = convertString.toString()
                                vetorName.push(convertString)
                                indice++
                                return (
                                    <tr className="linhaHostGroup" key={element.id}>
                                        <td className="centerNum" >{element.id}</td>
                                        <td className="leftHostGroup">{element.nome}</td>
                                        <td className="leftHostGroup">{element.idade}</td>
                                        <td className="leftHostGroup"><div ><Button style={{ minWidth: '5vw' }} className="btn-block btn-blocktime" type='button' value={element.id} onClick={IrPaciente.bind(value)}>Visualizar</Button></div></td>
                                        <td className="leftHostGroup">{element.telefone}</td>
                                        <td className="leftHostGroup">{element.responsavel_1}</td>
                                        <td className="leftHostGroup">{element.tel_responsavel_1}</td>
                                        <td className="leftHostGroup">{element.responsavel_2}</td>
                                        <td className="leftHostGroup">{element.tel_responsavel_2}</td>
                                        <td className="leftHostGroup"> <Button className="btn-block btn-blocktime" style={{ marginLeft: "5%" }} value={element.id} onClick={Apagar.bind(value)}  >
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
                <Button className="btn-block btn-blocktime" type='button' value="Entrar"  >
                    <Link to="/ConsoleLogado" className="divButton"> Voltar </Link>
                </Button>
            </div>
        </div>

    );
}

export default PaginaDePacientes;