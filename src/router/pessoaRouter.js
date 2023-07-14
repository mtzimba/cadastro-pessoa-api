const express = require('express');
const { PessoaController } = require('../controller/pessoaController');

const router = express.Router();
const pessoaController = new PessoaController();

router.get('/api/pessoas', pessoaController.listar);

router.post('/api/pessoas', pessoaController.incluir);

module.exports = router;
