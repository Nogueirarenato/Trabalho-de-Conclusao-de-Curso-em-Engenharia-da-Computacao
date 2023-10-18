import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


const Login= () => {
    return (
 
       <>
       <h1>Página de Login</h1>


       <Link to="/listaDeAdministradores" class="active">
       <h2>Ir para Página de Adiministradores</h2>
        
      </Link>
       
       </>
        
    );
}

export default Login;