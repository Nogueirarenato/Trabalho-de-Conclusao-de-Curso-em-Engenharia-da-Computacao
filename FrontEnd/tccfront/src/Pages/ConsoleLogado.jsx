import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


const ConsoleLogado= () => {
    return (
 
       <>
       <h1>ConsoleLogado</h1>


       <Link to="/PrimeiroAcesso" class="active">
       <h2>Primeiro Acesso</h2>
        
      </Link>
       
       </>
        
    );
}

export default ConsoleLogado;