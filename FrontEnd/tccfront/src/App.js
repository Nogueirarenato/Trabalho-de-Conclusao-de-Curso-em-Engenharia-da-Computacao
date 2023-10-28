import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Index from './Pages/Index';
import ListarAdministradores from './Pages/ListarAdministradores';
import PrimeiroAcesso from './Pages/PrimeiroAcesso';
import ConsoleLogado from './Pages/ConsoleLogado';
import ListarPacientes from './Pages/ListarPacientes';
import ListarMedicamentos from './Pages/ListarMedicamentos';
import CadastrarAdministrador from './Pages/CadastrarAdministrador';
import CadastrarPaciente from './Pages/CadastrarPaciente';
import CadastrarMedicacao from './Pages/CadastrarMedicacao';
import ListarMedicamentosUm from './Pages/ListarMedicamentosUm'






function App() {
  return (


    <Router>
      <div>

        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='listaDeAdministradores' element={<ListarAdministradores />} />
          <Route path='PrimeiroAcesso' element={<PrimeiroAcesso />} />
          <Route path='ConsoleLogado' element={<ConsoleLogado />} />
          <Route path='listaDePacientes' element={<ListarPacientes />} />
          <Route path='listaDeMedicamentos' element={<ListarMedicamentos />} />
          <Route path='listaDeMedicamentosUm' element={<ListarMedicamentosUm />} />
          <Route path='cadastrarAdministrador' element={<CadastrarAdministrador />} />
          <Route path='cadastrarPaciente' element={<CadastrarPaciente />} />
          <Route path='cadastrarMedicacao' element={<CadastrarMedicacao />} />



        </Routes>
      </div>
    </Router>
  );
}

export default App;









