/* 
  Alunos:
   Pedro Wilson Rodrigues de Lima - 2020267
   Marcos vinicius fernandes alves - 2021030
*/

import React, { useState, useEffect } from 'react';

const VisualizacoesCliente = ({ clienteId }) => {
  const [visualizacoes, setVisualizacoes] = useState([]);

  useEffect(() => {
    const fetchVisualizacoes = async () => {
      try {
        const response = await fetch(`/clientes/${clienteId}/visualizacoes`);
        const data = await response.json();
        setVisualizacoes(data);
      } catch (error) {
        console.error('Error fetching visualizacoes:', error);
      }
    };

    fetchVisualizacoes();
  }, [clienteId]);

  return (
    <div>
      <h2>Visualizações do Cliente</h2>
      <ul>
        {visualizacoes.map(vis => (
          <li key={vis._id}>
            {vis.filme.titulo} - Assistido em {new Date(vis.data).toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VisualizacoesCliente;
