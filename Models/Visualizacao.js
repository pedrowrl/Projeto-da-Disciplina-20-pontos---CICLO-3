// Alunos: Pedro Wilson e Marcos Vinicius

const mongoose = require('mongoose');

const VisualizacaoSchema = new mongoose.Schema({
  cliente: { type: mongoose.Schema.Types.ObjectId, ref: 'Cliente', required: true },
  filme: { type: mongoose.Schema.Types.ObjectId, ref: 'Filme', required: true },
  data: { type: Date, default: Date.now }
});

const Visualizacao = mongoose.model('Visualizacao', VisualizacaoSchema);

module.exports = Visualizacao;
