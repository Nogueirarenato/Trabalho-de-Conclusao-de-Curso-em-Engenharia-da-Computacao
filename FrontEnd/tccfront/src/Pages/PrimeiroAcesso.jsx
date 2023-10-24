import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Logo from '../img/logoUnivesp.png';
import Logo2 from '../img/engenhariaComputacao.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Index.css';
import {
    Button
} from "react-bootstrap";


const Login = () => {
    return (

        <div className='limiteH'>
            <section id="login" >

                <div className="caixa">
                    <div >
                        <div className='textPrimeiroTitulo'><h2>Primeiro Acesso</h2></div>

                        <div className='textPrimeiroAcesso'><h3>Para efetuar o primeiro acesso utilize o login padrão: usuário "admin", senha: "admin". </h3></div>

                        <div className='textPrimeiroAcesso'><h3>Ou entre em contato com um dos desenvolvedores:</h3></div>
                        <div className='textPrimeiroAcesso'><h3>Bruna    email: 2003356@aluno.univesp.br</h3></div>
                        <div className='textPrimeiroAcesso'><h3>Cynthia  email: 2005192@aluno.univesp.br</h3></div>
                        <div className='textPrimeiroAcesso'><h3>Danielle email: 2000522@aluno.univesp.br</h3></div>
                        <div className='textPrimeiroAcesso'><h3>Edilson  email: 2001511@aluno.univesp.br</h3></div>
                        <div className='textPrimeiroAcesso'><h3>José Guilherme email: 2006719@aluno.univesp.br</h3></div>
                        <div className='textPrimeiroAcesso'><h3>Renato email: 2009044@aluno.univesp.br</h3></div>

                    </div>
                    <div className='d-block'><form>



                        <div className='divButton'>

                            <Button className="btn-block btn-blocktime" type='button' value="Entrar"  >
                                <Link to="/" className="divButton"> Logar </Link>
                            </Button></div>

                    </form>
                    </div>
                </div>

            </section>


        </div>

    );
}

export default Login;