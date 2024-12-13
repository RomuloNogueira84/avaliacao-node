const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database')
const agendamentoRoutes = require('./routes/agendamentoRoutes')

const app = express();
const port = 5000;

app.use(cors());

app.use(express.json());

app.use('/agendamentos', agendamentoRoutes)

sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
  });
}).catch(error => console.error('Erro ao sincronizar com o banco', error));