import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AgendamentoCadastro from './pages/AgendamentoCadastro';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastro" element={<AgendamentoCadastro />} />
            <Route path="/editar/:id" element={<AgendamentoCadastro />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;