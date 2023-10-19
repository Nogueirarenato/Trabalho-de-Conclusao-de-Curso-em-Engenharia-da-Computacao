import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Index from './Pages/Index';
import ListarAdministradores from './Pages/ListarAdministradores'
import PrimeiroAcesso from './Pages/PrimeiroAcesso'






function App() {
  return (

    
    <Router>
      <div>

        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='listaDeAdministradores' element={<ListarAdministradores />} />
          <Route path='PrimeiroAcesso' element={<PrimeiroAcesso />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
 
 
 
 
 
 
 
 
 
