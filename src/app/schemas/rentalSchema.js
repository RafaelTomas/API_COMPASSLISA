const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const rentalSchema = mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  cnpj: {
    type: String,
    unique: true,
    required: true,
  },
  atividades: {
    type: String,
    required: true,
  },
  endereco: {
    type: Array,
    cep: { type: String, required: true },
    number: { type: Number, required: true },
    isFilial: { type: Boolean, required: true },
    complemento: { type: String, required: false },
  },
});

rentalSchema.plugin(mongoosePaginate);

const rental = mongoose.model('rental', rentalSchema);

rental.paginate().then({});

module.exports = rental;
