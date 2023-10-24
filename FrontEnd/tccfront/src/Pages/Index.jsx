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











 const Login= () => {


    const navigate = useNavigate();

    let [userName, setUserName] = useState("");
    let [userPassword, setUserPassword] = useState("");
    let [errorMessage, setErrorMessage] = useState("");


function atualizaUserName(event){
    event.preventDefault();
    setUserName(event.target.value)
    console.log(userName)
}

function atualizaPassword(event){
    event.preventDefault();
    setUserPassword(event.target.value)
    console.log(userPassword)
}

function realizaLogin(event){
    event.preventDefault(); 

    let user = {
        
        
            login: userName,
            senha: userPassword
        
       
    }


    
    fetch(Url + "VerificarLogin", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    }).then(response => {

        if(response.status == 200){ navigate("/ConsoleLogado")}
        else{setErrorMessage("Usuario ou Senha Inválidos")}

    })
}



    return (
 
        <div className='limiteH'>     
               <section id="login" >
        
        <div className="caixa">
           <div className='d-flex'> <img src={Logo} alt="Logo da Univesp" className="image1" />
            <img src={Logo2} alt="Logo do curso de engenharia da computacao" className="image1"/>
            </div>
            <div className='d-block'><form onSubmit={realizaLogin.bind()}>
                <input type="text" onChange={atualizaUserName.bind()} value={userName} className="input-text" placeholder="Insira o seu usuário" ></input>
                <input type="password" onChange={atualizaPassword.bind()} value={userPassword} placeholder="Insira sua senha" className="input-text"></input>
                <h2 style={{ color: "red", fontSize: "1.5em", marginLeft: "29%" }}>{errorMessage}</h2>
                
               <div className='divButton'>
                <Button className="btn-block btn-blocktime"type='submit' value="Entrar"  >
                    Realizar Login
                </Button></div><div className='divButton'>
                <Button className="btn-block btn-blocktime"type='button' value="Entrar"  >
                <Link to="/PrimeiroAcesso" className="divButton"> Primeiro Acesso </Link>
                </Button></div>
               
            </form>
            
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