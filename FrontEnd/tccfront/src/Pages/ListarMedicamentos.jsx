import React, { useEffect, useState, Component  } from "react";
import {BrowserRouter as Router, Routes, Route, useNavigate, Link } from 'react-router-dom';
import Logo from '../img/logoUnivesp.png';
import Logo2 from '../img/engenhariaComputacao.png';
import Url from '../Services/httpAPI'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Index.css';
import { 
    Button
 } from "react-bootstrap";


const PaginaDeMedicamentos= () => {

let vetor = []
let indice = -1
let vetorName = []
let convertString = ""

    let [resposta, setResposta] = useState([]);


useEffect(() => {
    // GET request using fetch inside useEffect React hook
    fetch(Url + "ListarMedicamentos")
        .then(response => response.json())
        .then(data =>{console.log(data); setResposta(data)});

// empty dependency array means this effect will only run once (like componentDidMount in classes)
}, []);



    return (
 
       <div className="caixa">
       <h1>Lista de Medicamentos</h1>


       <div className="tabela-hosts">
                            <table className="tableHostGroup">
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
                                                    <td className="leftHostGroup">{element.data_inicial}</td>
                                                    <td className="leftHostGroup">{element.data_final}</td>
                                                    <td className="leftHostGroup">{element.intervalo}</td>
                                                    <td className="leftHostGroup">{element.status}</td>
                                                    
                                                   
                                                    
                                                    {/* <td className="centerNum"><a onClick={this.janelaModal.bind(this, vetor[indice], vetorName[indice])} >Listar Eventos</a></td> */}
                                                </tr>)
                                        })
                                    }

                                                 


                                </tbody>
                            </table>
                        </div>

                        <Button className="btn-block btn-blocktime"type='button' value="Entrar"  >
                <Link to="/ConsoleLogado" className="divButton"> Voltar </Link>
                </Button>
       
       </div>
        
    );
}

export default PaginaDeMedicamentos;