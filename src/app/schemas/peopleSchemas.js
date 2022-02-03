const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const mongoosePaginate = require('mongoose-paginate-v2');
const SALT_WORK_FACTOR = 10;



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

peopleSchema.pre('save', async function save(next) {
  const data = await bcrypt.hash(this.senha, SALT_WORK_FACTOR);
  this.senha = data;
  next();
});

peopleSchema.plugin(mongoosePaginate);

const people = mongoose.model('people', peopleSchema);

people.paginate().then({});

module.exports = people;