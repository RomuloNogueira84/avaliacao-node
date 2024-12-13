import React, { useState, useEffect } from 'react';
import AgendamentoList from '../components/AgendamentoList';
import {Button} from "react-bootstrap";
import { Link } from 'react-router-dom';
import api from "../services/api";

const Home = () => {
  const [agendamentos, setAgendamentos] = useState([]);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchAgendamentos = async () => {
      try {
        const response = await api.get('');
        setAgendamentos(response.data);
          setLoading(false)
      } catch (err) {
        console.error('Erro ao buscar agendamentos', err);
        setError('Erro ao buscar agendamentos')
          setLoading(false)
      }
    };
    fetchAgendamentos();
  }, []);

  const handleDelete = async (id) => {
    try {
      await api.delete(`/${id}`);
      setAgendamentos(agendamentos.filter(agendamento => agendamento.id !== id))
    } catch (error) {
      console.error('Erro ao excluir agendamento', error);
    }
  };

  return (
    <div>
        <h1>Lista de Agendamentos</h1>
        <Link to="/cadastro">
            <Button variant="primary">Novo Agendamento</Button>
        </Link>
      {error && (
          <p className='text-danger'>Ocorreu um erro: {error}</p>
      )}
      <AgendamentoList agendamentos={agendamentos} onDelete={handleDelete} loading={loading}/>
    </div>
  );
};

export default Home;