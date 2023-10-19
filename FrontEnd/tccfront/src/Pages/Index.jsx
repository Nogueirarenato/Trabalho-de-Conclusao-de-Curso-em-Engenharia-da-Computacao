import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Logo from '../img/logoUnivesp.png';
import Logo2 from '../img/engenhariaComputacao.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Index.css';
import { 
    Button
 } from "react-bootstrap";


const Login= () => {
    return (
 
<div className='limiteH'>     
       <section id="login" >

<div className="caixa">
   <div className='d-flex'> <img src={Logo} alt="Logo da Univesp" className="image1" />
    <img src={Logo2} alt="Logo do curso de engenharia da computacao" className="image1"/>
    </div>
    <div className='d-block'><form>
        <input type="text" value="XXXXXX" placeholder="Insira o seu usuário" className="input-text" ></input>
        <input type="password" value="******" placeholder="Insira sua senha" className="input-text"></input>
        
        
       <div className='divButton'>
        <Button className="btn-block btn-blocktime"type='submit' value="Entrar"  >
            Realizar Login
        </Button></div><div className='divButton'>
        <Button className="btn-block btn-blocktime"type='button' value="Entrar"  >
        <Link to="/PrimeiroAcesso" className="divButton"> Primeiro Acesso </Link>
        </Button></div>
       
    </form>
    {/* <h2 style={{ color: "red", fontSize: "1.5em", marginLeft: "33%" }}>Usuário ou Senha Inválidos</h2> */}
    </div>
</div>
<p className='powered'>Powered by Turma 004 - TCC540 -  UNIVESP - 2º semestre de 2023 </p>
</section>

       {/* <Link to="/listaDeAdministradores" class="active">
       <h2>Ir para Página de Adiministradores</h2>
        
      </Link> */}
       
       </div> 
        
    );
}

export default Login;