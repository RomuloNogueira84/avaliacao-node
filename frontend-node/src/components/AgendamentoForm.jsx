import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

const AgendamentoForm = ({ onSubmit, initialData, loading, error }) => {
  const [nomeCliente, setNomeCliente] = useState('');
  const [dataAgendamento, setDataAgendamento] = useState('');
  const [horarioAgendamento, setHorarioAgendamento] = useState('');
  const [descricaoAgendamento, setDescricaoAgendamento] = useState('');
  const [formError, setFormError] = useState('');

  useEffect(() => {
    if (initialData) {
      setNomeCliente(initialData.nomeCliente || '');
      setDataAgendamento(initialData.dataAgendamento || '');
      setHorarioAgendamento(initialData.horarioAgendamento || '');
      setDescricaoAgendamento(initialData.descricaoAgendamento || '');
    }
  }, [initialData]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!nomeCliente || !dataAgendamento || !horarioAgendamento) {
      setFormError('Todos os campos obrigatórios devem ser preenchidos!');
      return;
    } else {
      setFormError('');
    }

    const agendamentoData = {
      nomeCliente,
      dataAgendamento,
      horarioAgendamento,
      descricaoAgendamento,
    };

    onSubmit(agendamentoData)
    clearForm()
  };

  const clearForm = () => {
    setNomeCliente('');
    setDataAgendamento('');
    setHorarioAgendamento('');
    setDescricaoAgendamento('');
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Nome do Cliente</Form.Label>
        <Form.Control type="text" value={nomeCliente} onChange={(e) => setNomeCliente(e.target.value)} />
      </Form.Group>

      <Form.Group>
        <Form.Label>Data do Agendamento</Form.Label>
        <Form.Control type="date" value={dataAgendamento} onChange={(e) => setDataAgendamento(e.target.value)} />
      </Form.Group>

      <Form.Group>
        <Form.Label>Horário do Agendamento</Form.Label>
        <Form.Control type="time" value={horarioAgendamento} onChange={(e) => setHorarioAgendamento(e.target.value)} />
      </Form.Group>

      <Form.Group>
        <Form.Label>Descrição do Agendamento</Form.Label>
        <Form.Control as="textarea" value={descricaoAgendamento} onChange={(e) => setDescricaoAgendamento(e.target.value)} />
      </Form.Group>
      {formError && (
        <Form.Text className="text-danger">{formError}</Form.Text>
      )}
      {error && (
        <Form.Text className="text-danger">Ocorreu um erro: {error}</Form.Text>
      )}
      <Button variant="primary" type="submit" disabled={loading}>
        {loading ? 'Carregando...' : 'Salvar'}
      </Button>
    </Form>
  );
};

export default AgendamentoForm;