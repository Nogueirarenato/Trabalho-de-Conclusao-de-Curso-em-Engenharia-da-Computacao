import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Index from './Pages/Index';
import ListarAdministradores from './Pages/ListarAdministradores'






function App() {
  return (

    
    <Router>
      <div>

        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='listaDeAdministradores' element={<ListarAdministradores />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
 
 
 
 
 
 
 
 
 
