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


const PaginaDePacientes= () => {

let vetor = []
let indice = -1
let vetorName = []
let convertString = ""

    let [resposta, setResposta] = useState([]);


useEffect(() => {
    // GET request using fetch inside useEffect React hook
    fetch(Url + "ListarPacientes")
        .then(response => response.json())
        .then(data =>{console.log(data); setResposta(data)});

// empty dependency array means this effect will only run once (like componentDidMount in classes)
}, []);



    return (
 
       <div className="caixa">
       <h1>Lista de Pacientes</h1>


       <div className="tabela-hosts">
                            <table className="tableHostGroup">
                                <thead className="primeiralinhaHostGroup">
                                    <tr>

   
                                        <th className="leftHostGroup">Id</th>
                                        <th className="leftHostGroup">Nome</th>
                                        <th className="leftHostGroup">Idade</th>
                                        <th className="leftHostGroup">Telefone</th>
                                        <th className="leftHostGroup">Responsável 1</th>
                                        <th className="leftHostGroup">Tel. Res. 1</th>
                                        <th className="leftHostGroup">Responsável 2</th>
                                        <th className="leftHostGroup">Tel. Res. 2</th>
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
                                                <tr className="linhaHostGroup">
                                                    <td className="centerNum" >{element.id}</td>
                                                    <td className="leftHostGroup">{element.nome}</td>
                                                    <td className="leftHostGroup">{element.idade}</td>
                                                    <td className="leftHostGroup">{element.telefone}</td>
                                                    <td className="leftHostGroup">{element.responsavel_1}</td>
                                                    <td className="leftHostGroup">{element.tel_responsavel_1}</td>
                                                    <td className="leftHostGroup">{element.responsavel_2}</td>
                                                    <td className="leftHostGroup">{element.tel_responsavel_2}</td>
                                                   
                                                    
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

export default PaginaDePacientes;