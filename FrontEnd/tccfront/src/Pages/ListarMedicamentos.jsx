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


const PaginaDeMedicamentos = () => {

    let vetor = []
    let indice = -1
    let vetorName = []
    let convertString = ""

    let [resposta, setResposta] = useState([]);


    useEffect(() => {
        // GET request using fetch inside useEffect React hook
        fetch(Url + "ListarMedicamentos")
            .then(response => response.json())
            .then(data => { console.log(data); setResposta(data) });

        // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);



    return (

        <div className="caixaAdministradores">
            <h1 className="tituloLogado alinharConsoleLogado">Lista de Medicamentos</h1>


            <div className="tabela-hosts">
                <Table striped bordered hover className="opaco">
                    <thead className="primeiralinhaHostGroup">
                        <tr>


                            <th className="leftHostGroup">Id</th>
                            <th className="leftHostGroup">Paciente</th>
                            <th className="leftHostGroup">Medicamento</th>
                            <th className="leftHostGroup">Dose</th>
                            <th className="leftHostGroup">Data de Início</th>
                            <th className="leftHostGroup">Data Final</th>
                            <th className="leftHostGroup">Intervalo (h)</th>
                            <th className="leftHostGroup">Status</th>

                            {/* <th className="leftHostGroup">Apagar</th> */}

                        </tr>
                    </thead>
                    <tbody id="myTable">
                        {
                            resposta.map(element => {
                                vetor.push(element.medicamento)
                                convertString = element.medicamento
                                convertString = convertString.toString()
                                vetorName.push(convertString)
                                indice++
                                return (
                                    <tr className="linhaHostGroup">
                                        <td className="centerNum" >{element.id}</td>
                                        <td className="centerNum" >{element.pacienteId}</td>
                                        <td className="leftHostGroup">{element.medicamento}</td>
                                        <td className="leftHostGroup">{element.dose}</td>
                                        <td className="leftHostGroup">{element.data_inicial[8]+element.data_inicial[9]+"/"+element.data_inicial[5]+element.data_inicial[6]+"/"+element.data_inicial[0]+element.data_inicial[1]+element.data_inicial[2]+element.data_inicial[3]+"      "+element.data_inicial[11]+element.data_inicial[12]+":"+element.data_inicial[14]+element.data_inicial[15]}</td>
                                        <td className="leftHostGroup">{element.data_final[8]+element.data_final[9]+"/"+element.data_final[5]+element.data_final[6]+"/"+element.data_final[0]+element.data_final[1]+element.data_final[2]+element.data_final[3]+"      "+element.data_final[11]+element.data_final[12]+":"+element.data_final[14]+element.data_final[15]}</td>
                                        <td className="leftHostGroup">{element.intervalo}</td>
                                        <td className="leftHostGroup">{element.status}</td>



                                        {/* <td className="centerNum"><a onClick={this.janelaModal.bind(this, vetor[indice], vetorName[indice])} >Listar Eventos</a></td> */}
                                    </tr>)
                            })
                        }




                    </tbody>
                </Table>
            </div>
            <div className="alinharConsoleLogado2 margin-botton">
            <Button className="btn-block btn-blocktime" type='button' value="Entrar"  >
                <Link to="/ConsoleLogado" className="divButton"> Voltar </Link>
            </Button>

        </div>
        </div>

    );
}

export default PaginaDeMedicamentos;