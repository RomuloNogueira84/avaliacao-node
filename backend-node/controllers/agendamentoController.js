const Agendamento = require('../models/agendamento');

const agendamentoController = {
  async create(req, res) {
    try {
      const agendamento = await Agendamento.create(req.body);
      return res.status(201).json(agendamento);
    } catch (error) {
      console.error(error)
      return res.status(500).json({ error: 'Erro ao criar agendamento.' });
    }
  },

  async getAll(req, res) {
    try {
      const agendamentos = await Agendamento.findAll();
      return res.json(agendamentos);
    } catch (error) {
      console.error(error)
      return res.status(500).json({ error: 'Erro ao listar agendamentos.' })
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params;
      const [updatedRows] = await Agendamento.update(req.body, {
        where: { id }
      })
      if (updatedRows > 0) {
        const updatedAgendamento = await Agendamento.findByPk(id)
        return res.json(updatedAgendamento)
      } else {
        return res.status(404).json({ error: 'Agendamento não encontrado.' })
      }

    } catch (error) {
      console.error(error)
      return res.status(500).json({ error: 'Erro ao editar agendamento.' })
    }
  },

  async delete(req, res) {
    try {
      const { id } = req.params;
      const deletedRows = await Agendamento.destroy({
        where: { id },
      })
      if (deletedRows > 0) {
        return res.status(204).send()
      } else {
        return res.status(404).json({ error: 'Agendamento não encontrado.' })
      }
    } catch (error) {
      console.error(error)
      return res.status(500).json({ error: 'Erro ao excluir agendamento.' })
    }
  }
};

module.exports = agendamentoController;