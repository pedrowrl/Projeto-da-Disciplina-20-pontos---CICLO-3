// Alunos: Pedro Wilson e Marcos Vinicius

const mongoose = require('mongoose');

const FilmeSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  categoria: { type: String, enum: ['comédia', 'drama', 'aventura', 'ficção'], required: true },
  atores: [{ 
    nome: { type: String, required: true },
    nomeReal: String,
    biografia: String,
    dataNascimento: Date
  }]
});

const Filme = mongoose.model('Filme', FilmeSchema);

module.exports = Filme;
