// Alunos: Pedro Wilson e Marcos Vinicius

const express = require('express');
const router = express.Router();
const Cliente = require('../models/Cliente');
const Visualizacao = require('../models/Visualizacao');

router.get('/:clienteId/visualizacoes', async (req, res) => {
  try {
    const visualizacoes = await Visualizacao.find({ cliente: req.params.clienteId }).populate('filme');
    res.json(visualizacoes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
