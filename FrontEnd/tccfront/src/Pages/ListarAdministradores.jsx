import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


const PaginaDeAdministradores= () => {
    return (
 
       <>
       <h1>Página de Administradores</h1>


       <Link to="/PrimeiroAcesso" class="active">
       <h2>Primeiro Acesso</h2>
        
      </Link>
       
       </>
        
    );
}

export default PaginaDeAdministradores;