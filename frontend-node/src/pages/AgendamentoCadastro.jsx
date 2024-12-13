import React, { useState, useEffect } from 'react';
import AgendamentoForm from '../components/AgendamentoForm';
import { useParams, useNavigate } from 'react-router-dom';
import api from "../services/api";

const AgendamentoCadastro = () => {
  const { id } = useParams();
  const navigate = useNavigate()
  const [initialData, setInitialData] = useState(null);
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchAgendamento = async () => {
      if (id) {
        setLoading(true)
        try {
          const response = await api.get(`/${id}`);
          setInitialData(response.data);
          setLoading(false)
        } catch (err) {
          console.error('Erro ao buscar agendamento', err)
          setError('Erro ao buscar agendamento')
          setLoading(false)
        }
      }
    };
    fetchAgendamento();
  }, [id]);

  const handleSubmit = async (agendamentoData) => {
    setLoading(true)
    try {
      if (id) {
        await api.put(`/${id}`, agendamentoData);
      } else {
        await api.post('/', agendamentoData);
      }
      navigate('/');
    } catch (error) {
      console.error("Erro ao salvar agendamento", error)
      setError('Erro ao salvar agendamento');
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <h1>{id ? 'Editar Agendamento' : 'Novo Agendamento'}</h1>
      <AgendamentoForm onSubmit={handleSubmit} initialData={initialData} loading={loading} error={error} />
    </div>
  );
};

export default AgendamentoCadastro;