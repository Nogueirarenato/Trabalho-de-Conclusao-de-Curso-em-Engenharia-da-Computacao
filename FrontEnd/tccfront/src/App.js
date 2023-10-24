import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Index from './Pages/Index';
import ListarAdministradores from './Pages/ListarAdministradores'
import PrimeiroAcesso from './Pages/PrimeiroAcesso'
import ConsoleLogado from './Pages/ConsoleLogado'
import ListarPacientes from './Pages/ListarPacientes'
import ListarMedicamentos from './Pages/ListarMedicamentos'






function App() {
  return (

    
    <Router>
      <div>

        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='listaDeAdministradores' element={<ListarAdministradores />} />
          <Route path='PrimeiroAcesso' element={<PrimeiroAcesso />} />
          <Route path='ConsoleLogado' element={<ConsoleLogado/>}/>
          <Route path='listaDePacientes' element={<ListarPacientes/>}/>
          <Route path='listaDeMedicamentos' element={<ListarMedicamentos/>}/>
          
          
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
 
 
 
 
 
 
 
 
 
