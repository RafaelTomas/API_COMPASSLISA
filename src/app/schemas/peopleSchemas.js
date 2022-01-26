const mongoose = require('mongoose');

const peopleSchema = mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  cpf: {
    type: String,
    unique: true,
    required: true
  },
  data_nascimento: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  senha: {
    type: String,
    required: true
  },
  habilitado: {
    type: String,
    enum: ['sim', 'não'],
    required: true
  }
});

const people = mongoose.model('people', peopleSchema);

module.exports = people;