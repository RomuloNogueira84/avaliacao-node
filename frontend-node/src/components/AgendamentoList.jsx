import React from 'react';
import { Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AgendamentoList = ({ agendamentos, onDelete, loading }) => {
  if (loading) {
    return <p>Carregando...</p>
  }
  if (!agendamentos || agendamentos.length === 0) {
    return <p>Nenhum agendamento encontrado.</p>
  }

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Nome do Cliente</th>
          <th>Data</th>
          <th>Horário</th>
          <th>Descrição</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {agendamentos.map((agendamento) => (
          <tr key={agendamento.id}>
            <td>{agendamento.nomeCliente}</td>
            <td>{new Date(agendamento.dataAgendamento).toLocaleDateString()}</td>
            <td>{agendamento.horarioAgendamento}</td>
            <td>{agendamento.descricaoAgendamento}</td>
            <td>
              <Link to={`/editar/${agendamento.id}`}>
                <Button variant='secondary' size='sm'>Editar</Button>
              </Link>
              <Button variant='danger' size='sm' onClick={() => onDelete(agendamento.id)}>Excluir</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default AgendamentoList;