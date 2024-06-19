// Alunos: Pedro Wilson e Marcos Vinicius

const express = require('express');
const router = express.Router();
const Filme = require('../models/Filme');

router.get('/', async (req, res) => {
  try {
    const filmes = await Filme.find();
    res.json(filmes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
