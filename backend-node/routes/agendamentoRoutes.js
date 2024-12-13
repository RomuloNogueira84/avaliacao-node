const express = require('express');
const router = express.Router();
const agendamentoController = require('../controllers/agendamentoController');

router.post('/', agendamentoController.create);
router.get('/', agendamentoController.getAll);
router.put('/:id', agendamentoController.update);
router.delete('/:id', agendamentoController.delete);


module.exports = router;