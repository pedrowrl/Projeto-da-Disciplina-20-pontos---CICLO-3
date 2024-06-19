// Alunos: Pedro Wilson e Marcos Vinicius

import React from 'react';
import FilmesList from './components/FilmesList';
import VisualizacoesCliente from './components/VisualizacoesCliente';

const App = () => {
  const clienteId = '60c3d85a8c0d1a083c1f62e4'; 

  return (
    <div>
      <h1>Aplicação de Streaming de Vídeo</h1>
      <FilmesList />
      <VisualizacoesCliente clienteId={clienteId} />
    </div>
  );
};

export default App;
