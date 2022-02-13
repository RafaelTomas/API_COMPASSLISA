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
  endereco: [
    {
      cep: { type: String, unique: true, required: true },
      number: { type: String, required: true },
      complemento: { type: String, required: false },
      isFilial: { type: Boolean, required: true },
      logradouro: { type: String, required: false },
      bairro: { type: String, required: false },
      localidade: { type: String, required: false },
      uf: { type: String, required: false },
      _id: false,
    },
  ],
});

rentalSchema.plugin(mongoosePaginate);

const rental = mongoose.model('rental', rentalSchema);

rental.paginate().then({});

module.exports = rental;
