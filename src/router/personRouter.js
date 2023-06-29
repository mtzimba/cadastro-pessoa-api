const express = require('express');
const { PersonController } = require('../controller/personController');

const router = express.Router();
const personController = new PersonController();

router.post('/people', personController.create);

module.exports = router;
