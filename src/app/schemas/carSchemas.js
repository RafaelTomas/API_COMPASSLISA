const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const carSchema = mongoose.Schema({

  modelo: {
    type: String,
    required: true
  },
  cor: {
    type: String,
    required: true
  },
  ano: {
    type: String,
    required: true
  },
  acessorios: {
    type: Array,
    default: [],
    required: true
  },
  quantidadePassageiros: {
    type: Number,
    required: true
  }
});

carSchema.plugin(mongoosePaginate);

const car = mongoose.model('car', carSchema);

car.paginate().then({});

module.exports = car;