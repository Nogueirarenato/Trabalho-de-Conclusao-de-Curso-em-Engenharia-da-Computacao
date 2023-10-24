import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Index.css';
import { 
    Button
 } from "react-bootstrap";


const ConsoleLogado= () => {
    return (
 
   
   <div className='caixa'>
    <h1>Painel de Controle</h1>
    <hr />
    <Button className="btn-block btn-blocktime"type='button' value="Entrar"  >
                <Link to="/listaDeAdministradores" className="divButton"> Listar Administradores </Link>
                </Button>
                
                <Button className="btn-block btn-blocktime"type='button' value="Entrar"  >
                <Link to="/listaDePacientes" className="divButton"> Listar Pacientes </Link>
                </Button>

                <Button className="btn-block btn-blocktime"type='button' value="Entrar"  >
                <Link to="/listaDeMedicamentos" className="divButton"> Listar Medicamentos </Link>
                </Button>

                </div>

   
   
   
        //    <>
    //    <h1>ConsoleLogado</h1>


    //    <Link to="/PrimeiroAcesso" className="active">
    //    <h2>Primeiro Acesso</h2>
        
    //   </Link>
       
    //    </>
        
    );
}

export default ConsoleLogado;