const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const rentalSchema = mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  cnpj: {
    type: String,
    required: true,
  },
  atividades: {
    type: String,
    required: true,
  },
  endereço: {
    cep: String,
    number: Number,
    isFilial: Boolean,
    complemento: { type: String, required: false },
    required: true,
  },
  quantidadePassageiros: {
    type: Number,
    required: true,
  },
});

rentalSchema.plugin(mongoosePaginate);

const rental = mongoose.model('rental', rentalSchema);

rental.paginate().then({});

module.exports = rental;
