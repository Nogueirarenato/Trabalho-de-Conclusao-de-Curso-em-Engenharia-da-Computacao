import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Index.css';
import './ConsoleLogado.css'
import {
    Button
} from "react-bootstrap";


const ConsoleLogado = () => {
    return (


        <div className="caixaLogado">
            <h1 className='tituloLogado'>Painel de Controle</h1>
            <div className='alinharConsoleLogado2'>

                <hr />
                <div className='alinharConsoleLogado'><Button className="btn-block btn-blocktime" type='button' value="Entrar"  >
                    <Link to="/listaDeAdministradores" className="divButton"> Listar Administradores </Link>
                </Button>

                    <Button className="btn-block btn-blocktime" type='button' value="Entrar"  >
                        <Link to="/listaDePacientes" className="divButton"> Listar Pacientes </Link>
                    </Button>

                    <Button className="btn-block btn-blocktime" type='button' value="Entrar"  >
                        <Link to="/listaDeMedicamentos" className="divButton"> Listar Medicamentos </Link>
                    </Button></div>
                <div className='alinharConsoleLogado'><Button className="btn-block btn-blocktime" type='button' value="Entrar"  >
                    <Link to="/cadastrarAdministrador" className="divButton">Cadastrar Administrador </Link>
                </Button>
                    <Button className="btn-block btn-blocktime" type='button' value="Entrar"  >
                        <Link to="/cadastrarPaciente" className="divButton">Cadastrar Paciente </Link>
                    </Button>
                    <Button className="btn-block btn-blocktime" type='button' value="Entrar"  >
                        <Link  to="/cadastrarMedicacao" className="divButton">Cadastrar Medicação </Link>
                        

                    </Button>
                </div>
            </div>
            <div className='alinharConsoleLogado margin-botton'><Button className="btn-block btn-blocktime" type='button' value="Entrar"  >
                <Link to="/" className="divButton" >Sair </Link>
            </Button></div>
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