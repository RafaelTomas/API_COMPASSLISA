const mongoose = require('mongoose');
const request = require('supertest');

const app = require('../../src/app');
const CarService = require('../../src/app/services/CarService');
const truncate = require('../utils/truncate');

const car = {};

describe('Test car controller', () => {
  beforeAll(async () => {
    car.a1 = await CarService.create({
      modelo: 'GM S10 2.8',
      cor: 'branco',
      ano: '2021',
      acessorios: [
        { descricao: 'Ar-condicionado' },
      ],
      quantidadePassageiros: 5,
    });
  });

  afterAll(async () => {
    mongoose.connection.close();
  });

  it('create car', async () => {
    const res = await request(app).post('/api/v1/car').send({
      modelo: 'GOL',
      cor: 'branco',
      ano: '2021',
      acessorios: [
        { descricao: 'Ar-condicionado' },
        { descricao: 'Dir. Hidráulica' },
        { descricao: 'Cabine Dupla' },
      ],
      quantidadePassageiros: 5,
    });
    expect(res.status).toBe(201);
  });

  it('find all car', async () => {
    const res = await request(app).get('/api/v1/car');
    expect(res.status).toBe(200);
  });

  it('update car', async () => {
    const res = await request(app).put(`/api/v1/car/${car.a1._id}`).send(
      {
        modelo: 'GM S10 2.8',
        cor: 'preto',
        ano: '2021',
        acessorios: [
          { descricao: 'Ar-condicionado' },
        ],
        quantidadePassageiros: 4,
      },
    );

    expect(res.status).toBe(200);
  });

  it('delete car', async () => {
    const res = await request(app).delete(`/api/v1/car/${car.a1._id}`);
    expect(res.status).toBe(204);
  });
});
