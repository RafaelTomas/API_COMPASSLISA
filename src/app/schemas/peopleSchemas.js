const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

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
    required: true,
    unique: true
  },
  senha: {
    type: String,
    required: true,
    select: false
  },
  habilitado: {
    type: String,
    required: true
  }
});

peopleSchema.plugin(mongoosePaginate);

const people = mongoose.model('people', peopleSchema);

people.paginate().then({});

module.exports = people;